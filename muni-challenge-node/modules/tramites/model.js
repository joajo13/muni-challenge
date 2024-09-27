import { DataTypes } from "sequelize";
import { STATUS } from "../../constants/STATUS.js";
import db from "../../config/dbConfig.js";
import Ciudadano from "../ciudadanos/model.js";
import User from "../users/model.js";

const Tramite = db.define("tramite", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ciudadanoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    statusChangedBy: {
        type: DataTypes.INTEGER,
        allowNull: true
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
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: true
    },
    commentBy: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
});

Tramite.belongsTo(Ciudadano, { as: "ciudadano", foreignKey: "ciudadanoId" });
Tramite.belongsTo(User, { as: "user", foreignKey: "statusChangedBy" });
Tramite.belongsTo(User, { as: "commentUser", foreignKey: "commentBy" });

export default Tramite;