import axios from "axios";

export const api = axios.create({
  baseURL: "https://jolly-moth-coveralls.cyclic.app/api/v1",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials:true
});

export const postRequest = async (endPoint, body) => {
  const response = await api.post(endPoint, body).catch(err => err.response);
  return response;
}

export const getRequest = async (endPoint) => {
  const response = await api.get(endPoint).catch(err => err.response);
  return response;
}

export const patchRequest = async (endPoint,body) => {
  const response = await api.patch(endPoint,body).catch(err => err.response);
  return response;
}