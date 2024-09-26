import db from "../models/index.js";
import ftpClient from "ftp-client";
import fs from "fs";

const Tramite = db.tramites;
const Ciudadano = db.ciudadanos;

export const createTramite = async (req, res) => {
    try {
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
        const archivo = req.file

        const ciudadano = await Ciudadano.findOne({ where: { dni } });

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
            await Ciudadano.update({
                nombre,
                email,
                fechaNacimiento,
            }, { where: { dni } });
        }

        const tramite = await Tramite.create({
            ciudadanoId,
            deporte,
            promedio,
            logros,
            institucion,
            comprobanteImagePath: archivo.filename
        });

        res.status(201).json(tramite);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}