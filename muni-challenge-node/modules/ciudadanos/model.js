import db from "../../config/dbConfig.js";
import { DataTypes } from "sequelize";

const Ciudadano = db.define("ciudadano", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true
    },
});

export default Ciudadano;