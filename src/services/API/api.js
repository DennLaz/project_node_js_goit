import axios from "axios";

export const instance = axios.create({
  baseURL: "https://pro-test.onrender.com/api",
});

const setToken = (token = "") => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const registerInAPI = async (userData) => {
  const { data } = await instance.post("/users/register", userData);
  return data;
};

export const loginInAPI = async (userData) => {
  const { data } = await instance.post("/users/login", userData);
  setToken(data.token);
  return data;
};

export const logoutFromAPI = async () => {
  setToken("");
};

export const getCurrentUser = async (token) => {
  setToken(token);
  try {
    const { data } = await instance.get("/users/current");
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const reSendEmail = async (email) => {
  const resault = await instance.post("/users/verify", { email });
  return resault;
};

export const sendNewPassword = async (email) => {
  const data = await instance.post("/users/reset/password", email);
  return data;
};

export const getUserResult = async (id) => {
  const { data } = await instance.get(`/users/${id}`);
  return data;
};
