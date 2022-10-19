import { instance } from "./api";

export const fetchQuestions = async (type) => {
  const { data } = await instance(`/questions/${type}`);
  return data;
};
