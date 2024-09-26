import db from "../models/index.js";
import { client } from "../config/ftpConfig.js";
import { validateTramite } from "../utils/tramites/validateTramite.js";
import { deleteFileFromServer } from "../utils/tramites/deleteFileFromServer.js";

const Tramite = db.tramites;
const Ciudadano = db.ciudadanos;

export const createTramite = async (req, res) => {
    try {
        // Extrae los datos del cuerpo de la solicitud
        const {
            nombre,
            dni,
            email,
            fechaNacimiento,
            deporte,
            promedio,
            logros,
            institucion,
        } = req.body;
        const archivo = req.file;

        // Valida los datos del trámite
        const tramiteValidation = validateTramite({
            nombre,
            dni,
            email,
            fechaNacimiento,
            deporte,
            promedio,
            logros,
            institucion,
        });

        // Si hay un error en la validación, devuelve error 400
        if (tramiteValidation.error) {
            deleteFileFromServer(archivo);
            return res.status(400).json({ message: tramiteValidation.error });
        }

        // Busca al ciudadano por su DNI
        const ciudadano = await Ciudadano.findOne({ where: { dni } });

        // Si el ciudadano no existe, crea uno nuevo
        var ciudadanoId = ciudadano?.dataValues.id || null;
        if (!ciudadano) {
            const ciudadano = await Ciudadano.create({
                nombre,
                dni,
                email,
                fechaNacimiento,
            },
                {
                    returning: true,
                }
            );

            ciudadanoId = ciudadano.dataValues.id;
        } else {
            // Si el ciudadano existe, actualiza sus datos
            await Ciudadano.update({
                nombre,
                email,
                fechaNacimiento,
            }, { where: { dni } });
        }

        // Sube el archivo al servidor FTP
        await client.uploadFrom(archivo.path, archivo.filename);

        // Elimina el archivo del servidor local
        deleteFileFromServer(archivo);

        // Crea el nuevo trámite en la base de datos
        const tramite = await Tramite.create({
            ciudadanoId,
            deporte,
            promedio,
            logros,
            institucion,
            comprobanteImagePath: archivo.filename
        });

        // Devuelve el trámite creado
        res.status(201).json(tramite);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};