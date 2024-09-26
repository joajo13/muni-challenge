const validatePassword = (password) => {
    if (password.length < 6) {
        return "Password is not valid";
    }

    if (password.length > 20) {
        return "Password is not valid";
    }

    return null;
}

export default validatePassword;