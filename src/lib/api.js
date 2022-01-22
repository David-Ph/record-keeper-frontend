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

export async function getProfile(token) {
  try {
    const response = await axios.get(`${API}/auth/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
}

export async function editProfile(newData, token) {
  try {
    const formData = new FormData();
    formData.append("username", newData.username);
    formData.append("avatar", newData.avatar);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": true,
      },
      withCredentials: false,
    };
    console.log("SENDING");
    const response = await axios.post(`${API}/auth/edit`, formData, config);

    console.log(response);

    // return response;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
}
