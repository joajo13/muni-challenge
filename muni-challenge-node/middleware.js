import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;

export const verifyToken = (req, res, next) => {
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];

    if (!secretKey) {
        console.log(secretKey);
        throw new Error("SECRET_KEY environment variable is not set");
    }

    if (!token) {
        return res.status(401).json({ message: "No tienes permisos." });
    }

    try {
        const payload = jwt.verify(token, secretKey);
        req.username = payload.username;
        next();
    } catch (error) {
        return res.status(403).json({ message: "No tienes permisos." });
    }
}