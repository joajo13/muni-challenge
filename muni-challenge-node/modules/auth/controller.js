import User from "../users/model.js";
import { validateUsername } from "../../utils/user/validateUsername.js";
import { verifyUsernameAlreadyExists } from "../../utils/user/verifyUsernameAlreadyExists.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Verifica si el nombre de usuario ya existe
        const usernameAlreadyExists = await verifyUsernameAlreadyExists(username);

        // Si el nombre de usuario ya existe, devuelve un error
        if (usernameAlreadyExists) return res.status(400).json({ error: "El usuario no está disponible." });

        // Valida el nombre de usuario
        const usernameValidations = validateUsername(username);

        // Si hay errores de validación, devuelve un error
        if (usernameValidations) return res.status(400).json({ error: usernameValidations });

        const hashedPassword = await bcrypt.hash(password, 13);

        // Crea un nuevo usuario
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        // Responde con el usuario creado
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Ha ocurrido un error." });
    }
}

export const signIn = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Busca al usuario por su nombre de usuario
        const user = await User.findOne({ where: { username } });

        // Si el usuario no existe, devuelve error
        if (!user) return res.status(404).json({ error: "Usuario no encontrado." });

        const isPasswordValid = await bcrypt.compare(password, user.password);

        // Verifica si la contraseña es correcta
        if (!isPasswordValid) return res.status(401).json({ error: "Contraseña incorrecta." });

        // Genera un token JWT
        const token = jwt.sign({user}, process.env.JWT_SECRET, { expiresIn: "3h" });

        // Responde con el token y los datos del usuario
        res.status(200).json({ token, user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Ha ocurrido un error." });
    }
}