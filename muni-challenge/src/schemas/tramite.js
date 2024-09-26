import { z } from "zod";
import { TRAMITE_ERROR } from "@/constants/TRAMITE_ERRORS";

export const tramiteSchema = z.object({
    nombre: z
        .string()
        .min(3, { message: TRAMITE_ERROR.nombre.min })
        .max(50, { message: TRAMITE_ERROR.nombre.max }),
    dni: z
        .string()
        .min(1, { message: TRAMITE_ERROR.dni.required })
        .length(8, { message: TRAMITE_ERROR.dni.length }),
    email: z
        .string()
        .min(3, { message: TRAMITE_ERROR.email.min })
        .email({ message: TRAMITE_ERROR.email.invalid }),
    fechaNacimiento: z
        .string()
        .min(1, { message: TRAMITE_ERROR.fechaNacimiento }),
    deporte: z.string().min(3, { message: TRAMITE_ERROR.deporte }),
    promedio: z
        .string()
        .min(1, { message: TRAMITE_ERROR.promedio.min })
        .max(10, { message: TRAMITE_ERROR.promedio.max }),
    institucion: z
        .string()
        .min(3, { message: TRAMITE_ERROR.institucion.min })
        .max(50, { message: TRAMITE_ERROR.institucion.max }),
    logros: z
        .string()
        .max(100, { message: TRAMITE_ERROR.logros.max }),
});