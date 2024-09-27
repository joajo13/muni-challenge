import { client } from "../../config/ftpConfig.js";
import { validateTramite } from "../../utils/tramites/validateTramite.js";
import { deleteFileFromServer } from "../../utils/tramites/deleteFileFromServer.js";
import Tramite from "./model.js";
import Ciudadano from "../ciudadanos/model.js";
import { STATUS } from "../../constants/STATUS.js";

export const create = async (req, res) => {
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

        console.log(req.body)

        if (!archivo) {
            return res.status(400).json({ error: "El archivo es requerido" });
        }

        if (archivo.mimetype !== 'image/jpg' && archivo.mimetype !== 'image/jpeg' && archivo.mimetype !== 'video/mp4' && archivo.mimetype !== 'image/png') {
            deleteFileFromServer(archivo);
            return res.status(400).json({ error: "El archivo debe ser una imagen o un video." });
        }

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
            logros
        });

        // Si hay un error en la validación, devuelve error 400
        if (tramiteValidation.error) {
            deleteFileFromServer(archivo);
            return res.status(400).json({ error: tramiteValidation.error });
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
                birthday: fechaNacimiento,
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
                birthday: fechaNacimiento,
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
            comprobanteImagePath: process.env.DRIVE_HQ_HOST + archivo.filename,
        });

        // Devuelve el trámite creado
        res.status(201).json(tramite);
    } catch (error) {
        console.log(error);
        deleteFileFromServer(req.file);
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

export const getAll = async (req, res) => {
    try {
        const tramites = await Tramite.findAll({
            include: [
                {
                    model: Ciudadano,
                    as: 'ciudadano',
                },
            ],
        });

        const transformedTramites = tramites.map(tramite => {
            const { ciudadano, ...tramiteData } = tramite.toJSON();
            return {
                ...tramiteData,
                fechaNacimiento: ciudadano.birthday,
                nombre: ciudadano.nombre,
                dni: ciudadano.dni,
                email: ciudadano.email,
            };
        });

        res.status(200).json(transformedTramites);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
}

export const getById = async (req, res) => {
    try {
        const { id } = req.params;

        const tramite = await Tramite.findByPk(id, {
            include: [
                {
                    model: Ciudadano,
                    as: 'ciudadano',
                },
            ],
        });

        if (!tramite) {
            return res.status(404).json({ error: 'Trámite no encontrado' });
        }

        const { ciudadano, ...tramiteData } = tramite.toJSON();

        res.status(200).json({
            ...tramiteData,
            nombre: ciudadano.nombre,
            dni: ciudadano.dni,
            email: ciudadano.email,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
}

export const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;
        const user = req.user;

        console.log(req.body)

        console.log({
            id,
            comment,
            user,
        })

        const tramite = await Tramite.findByPk(id);

        if (!tramite) {
            return res.status(404).json({ error: 'Trámite no encontrado' });
        }

        await tramite.update({ comment, commentBy: user.id });

        res.status(200).json(tramite);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
}

export const updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const user = req.user;

        console.log(req.body)

        const tramite = await Tramite.findByPk(id);

        if (!tramite) {
            return res.status(404).json({ error: 'Trámite no encontrado' });
        }

        if (!Object.values(STATUS).includes(status)) {
            return res.status(400).json({ error: 'Estado inválido' });
        }

        await tramite.update({ status, statusChangedBy: user.id });

        res.status(200).json(tramite);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
}