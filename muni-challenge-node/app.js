import './config/dotenvConfig.js';
import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import tramitesRoutes from "./routes/tramites.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/tramites", tramitesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}. http://localhost:${PORT}`);
});