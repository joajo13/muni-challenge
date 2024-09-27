
const { VITE_API_URL: baseUrl } = import.meta.env;

export const getAll = async (user, token) => {
    try {
        var url = `${baseUrl}/tramites`;

        if (user) {
            url += `?user=${user}`;
        }

        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}