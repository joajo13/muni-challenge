import { STATUS } from "../constants/STATUS.js";

const Tramite = (sequelize, DataTypes) => {
    const Tramite = sequelize.define("tramite", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ciudadanoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "ciudadanos",
                key: "id"
            }
        },
        statusChangedBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "users",
                key: "id"
            }
        },
        deporte: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: STATUS.PENDIENTE
        },
        comprobanteImagePath: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Tramite;
};

export default Tramite;