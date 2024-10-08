import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

export const verifyToken = (role) => {
    return (req, res, next) => {
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

            console.log(payload);

            if (role && payload.user.role !== role) {
                return res.status(403).json({ error: "No tienes permisos." });
            }

            next();
        } catch (error) {
            console.log(error);
            return res.status(403).json({ error: "No tienes permisos." });
        }
    }
}