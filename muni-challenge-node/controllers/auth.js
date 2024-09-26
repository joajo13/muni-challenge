import db from "../models/index.js";
import { validateUsername } from "../utils/user/validateUsername.js";
import { verifyUsernameAlreadyExists } from "../utils/user/verifyUsernameAlreadyExists.js";
import jwt from "jsonwebtoken";
const secretKey = process.env.SECRET_KEY;

const User = db.users;
// utils/delay.js
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const usernameAlreadyExists = await verifyUsernameAlreadyExists(username);

        if (usernameAlreadyExists) return res.status(400).json({ message: "El usuario no esta disponible." });
        
        const usernameValidations = validateUsername(username);

        if (usernameValidations) return res.status(400).json({ message: usernameValidations });

        const user = await User.create({
            username,
            email,
            password
        });

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ha ocurrido un error." });
    }
}

export const signIn = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } });

        if (!user) return res.status(404).json({ message: "Usuario no encontrado." });

        if (user.password !== password) return res.status(401).json({ message: "Contraseña incorrecta." });

        const token = jwt.sign({ username }, secretKey, { expiresIn: "3h" });

        res.status(200).json({ token, user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ha ocurrido un error." });
    }
}