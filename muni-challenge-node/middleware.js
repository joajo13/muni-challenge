import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

export const verifyToken = (req, res, next) => {
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];

    if (!jwtSecret) {
        throw new Error("SECRET_KEY environment variable is not set");
    }

    if (!token) {
        return res.status(401).json({ error: "No tienes permisos." });
    }

    try {
        const payload = jwt.verify(token, jwtSecret);
        req.user = payload.user;
        next();
    } catch (error) {
        return res.status(403).json({ error: "No tienes permisos." });
    }
}