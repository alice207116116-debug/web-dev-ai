import axios from "axios";

// POST http://localhost:4000/api/users/signup
export const signup = async (data) => {
    await axios.post("http://localhost:4000/api/users/signup", data);
};