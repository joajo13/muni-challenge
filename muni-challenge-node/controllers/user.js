import db from "../models/index.js";
import { validateUsername } from "../utils/user/validateUsername.js";

const User = db.users;

export const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        console.log("username: ", username);

        const usernameValidations = validateUsername(username);

        if (usernameValidations) return res.status(400).json({ message: usernameValidations });

        const user = await User.create({
            username,
            email,
            password
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}