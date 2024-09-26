const { VITE_API_URL: baseUrl } = import.meta.env;

export const signin = async (username, password) => {
    try {
        const response = await fetch(`${baseUrl}/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}