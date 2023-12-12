const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAll = async () => {
    try {
        const responce = await fetch(baseUrl);
        const result = await responce.json();

        const data = Object.values(result);

        return data;
    } catch (error) {
        console.log(error)
    }
};