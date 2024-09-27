
const { VITE_API_URL: baseUrl } = import.meta.env;

export const updateComment = async ({comment, token, idTramite}) => {
    try {
        console.log({comment, token, idTramite});

        const response = await fetch(`${baseUrl}/tramites/update/${idTramite}/comment`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ comment }),
        });

        
        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}