import axios from "axios";

const API = process.env.REACT_APP_API;

export async function login(loginData) {
  try {
    const response = await axios.post(`${API}/auth/login`, loginData);

    return response;
  } catch (error) {
    const errorMessage = error.response.data.errors;
    throw new Error(errorMessage);
  }
}

export async function register(registerData) {
  try {
    const response = await axios.post(`${API}/auth/register`, registerData);

    return response;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
}
