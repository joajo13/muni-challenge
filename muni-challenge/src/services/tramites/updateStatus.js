
const { VITE_API_URL: baseUrl } = import.meta.env;

export const updateStatus = async ({status, token, idTramite}) => {
    try {
        const response = await fetch(`${baseUrl}/tramites/update/${idTramite}/status`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        });

        
        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}