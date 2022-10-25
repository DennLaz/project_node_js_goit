import axios from "axios";

export const instance = axios.create({
  baseURL: "https://node-project-pro-test.herokuapp.com/api",
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

export const logoutFromAPI = async (token) => {
  // const { data } = await instance.post("/users/logout", token);
  setToken("");
  // return data;
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

export const googleAPI = async () => {
  const { data } = await instance.get("/users/google");
  setToken(data.token);
  return data;
};
