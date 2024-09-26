export const validateTramite = ({
    nombre,
    dni,
    email,
    fechaNacimiento,
    deporte,
    promedio,
    logros,
    institucion,
}) => {

    if (!nombre) return { error: "Nombre es requerido" };
    if (!dni) return { error: "DNI es requerido" };
    if (!email) return { error: "Email es requerido" };
    if (!fechaNacimiento) return { error: "Fecha de nacimiento es requerida" };
    if (!deporte) return { error: "Deporte es requerido" };
    if (!promedio) return { error: "Promedio es requerido" };
    if (!institucion) return { error: "Institución es requerida" };

    if (dni.length !== 8) return { error: "DNI debe tener 8 caracteres" };
    if (isNaN(dni)) return { error: "DNI debe ser un número" };
    if (isNaN(promedio)) return { error: "Promedio debe ser un número" };
    if (!email.includes("@")) return { error: "Email inválido" };
    if (new Date(fechaNacimiento) > new Date()) return { error: "Fecha de nacimiento inválida" };
    if (nombre.length < 3) return { error: "Nombre debe tener al menos 3 caracteres" };
    if (nombre.length > 50) return { error: "Nombre debe tener menos de 50 caracteres" };
    if (logros.length > 500) return { error: "Los logros deben tener menos de 100 caracteres" };

    return { error: null };
}