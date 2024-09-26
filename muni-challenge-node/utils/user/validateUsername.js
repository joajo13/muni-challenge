export const validateUsername = (username) => {
    const minLength = 3;
    const maxLength = 20;
    const allowedCharacters = /^[a-zA-Z0-9_]+$/;

    if (username.length < minLength || username.length > maxLength) {
        return 'Usuario no válido.';
    }

    if (!allowedCharacters.test(username)) {
        return "Usuario no válido.";
    }

    return null;
}