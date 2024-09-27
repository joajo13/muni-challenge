import './config/dotenvConfig.js';
import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./modules/auth/routes.js";
import tramitesRoutes from "./modules/tramites/routes.js";
import db from './config/dbConfig.js';
import User from './modules/users/model.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", authRoutes);
app.use("/tramites", tramitesRoutes)

db.sync({ force: false }).then(() => {
    console.log("Database synced");
});

try {
    const user = await User.findOne({
        where: {
            username: "admin"
        }
    });

    if (!user) {
        User.create({
            username: "admin",
            email: "admin@email.com",
            password: "admin",
            role: "admin"
        });
    }
} catch (error) {
    console.log(error);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}. http://localhost:${PORT}`);
});