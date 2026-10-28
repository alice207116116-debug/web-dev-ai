import axios from "axios";

// POST http://localhost:4000/api/users/signup
export const signup = async (data) => {
    await axios.post("http://localhost:4000/api/users/signup", data);
};

// POST http://localhost:4000/api/users/login -> req.body
export const login = async (data) => {
    await axios.post("http://localhost:4000/api/users/login", data);
};