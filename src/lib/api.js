import axios from "axios";

const API = process.env.REACT_APP_API;

export async function login(loginData) {
  try {
    const response = await axios.post(`${API}/auth/login`, loginData);

    // check if ok
    // set localstorage

    return response;
  } catch (error) {
    throw new Error(error.response.data.errors.join(", "));
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
