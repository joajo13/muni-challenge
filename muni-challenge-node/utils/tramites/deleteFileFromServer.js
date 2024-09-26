import fs from 'fs';

export const deleteFileFromServer = async (archivo) => {
    fs.unlink(archivo.path, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error al subir archivo" });
        }
    });
}