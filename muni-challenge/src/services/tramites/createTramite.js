import { toast } from "sonner";

const { VITE_API_URL: baseUrl } = import.meta.env;

export const createTramite = async (formData) => {
    try {
        console.log(Object.fromEntries(formData));

        const response = await fetch(`${baseUrl}/tramites/create`, {
            method: "POST",
            body: formData,
        });
        
        if (!response.ok) toast.error("Ha ocurrido un error al registrar el tramite.");

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}