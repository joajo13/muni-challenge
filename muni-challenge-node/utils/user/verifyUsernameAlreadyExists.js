import db from "../../models/index.js";
const User = db.users;

export const verifyUsernameAlreadyExists = async (username) => {
    const user = await User.findOne({
        where: {
            username
        }
    });

    return user;
}