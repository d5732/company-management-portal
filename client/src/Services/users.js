import api from "./api";

export const login = async (username, password) => {
    let response;
    try {
        response = await api.post("/users/login", {
            username: username,
            password: password,
        });
    } catch (err) {
        console.log("login response:", response, "err", err);
        throw err
    } 
    return response?.data;
};
