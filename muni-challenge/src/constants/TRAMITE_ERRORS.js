export const TRAMITE_ERROR = {
    nombre: {
        min: "El nombre debe tener al menos 3 caracteres",
        max: "El nombre no puede tener más de 50 caracteres",
    },
    dni: {
        required: "El DNI es requerido",
        length: "El DNI debe tener exactamente 8 caracteres",
    },
    email: {
        min: "El correo electrónico debe tener al menos 3 caracteres",
        invalid: "El correo electrónico no es válido",
    },
    fechaNacimiento: "La fecha de nacimiento es requerida",
    deporte: "El deporte debe tener al menos 3 caracteres",
    promedio: {
        number: "El promedio debe ser un número",
        min: "El promedio debe ser al menos 0",
        max: "El promedio no puede ser mayor a 10",
    },
    institucion: {
        min: "La institución debe tener al menos 3 caracteres",
        max: "La institución no puede tener más de 50 caracteres",
    },
    logros: {
        min: "Los logros deben tener al menos 3 caracteres",
        max: "Los logros no pueden tener más de 500 caracteres",
    },
    archivo: {
        required: "El archivo es requerido",
        type: "El archivo debe ser un PDF",
    },
};
