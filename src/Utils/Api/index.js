import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const postRequest = async (endPoint, body) => {
  const response = await api.post(endPoint, body).catch(err => err.response);
  return response;
}

export const getRequest = async (endPoint) => {
  const response = await api.get(endPoint).catch(err => err.response);
  return response;
}