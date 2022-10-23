import { instance } from "./api";


export const fetchQuestions = async (type) => {
  const { data } = await instance(`tests/qa/${type}`);
  return data;
};


export const getResultTest = async (value) => {
  const { data } = await instance.post("tests/results", {value} )
  return data;
};


