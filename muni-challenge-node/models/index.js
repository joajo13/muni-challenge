import { Sequelize } from "sequelize";
import config from "../config/dbConfig.js";
import User from "./user.model.js";
import Ciudadano from "./ciudadano.model.js";
import Tramite from "./tramite.model.js";

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        },
        logging: false
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = User(sequelize, Sequelize);
db.ciudadanos = Ciudadano(sequelize, Sequelize);
db.tramites = Tramite(sequelize, Sequelize);

db.users.sync({ force: false }).then(() => {
    console.log("Sync db successfully.");
});

db.ciudadanos.sync({ force: false }).then(() => {
    console.log("Sync db successfully.");
});

db.tramites.sync({ force: false }).then(() => {
    console.log("Sync db successfully.");
});

export default db;