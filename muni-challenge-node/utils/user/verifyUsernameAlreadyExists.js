import User from "../../modules/users/model.js";

export const verifyUsernameAlreadyExists = async (username) => {
    const user = await User.findOne({
        where: {
            username
        }
    });

    return user;
}