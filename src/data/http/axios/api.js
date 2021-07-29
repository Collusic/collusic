import axios from "axios";

const API = axios.create({
  baseURL: "http://168.131.157.14:8001",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default API;
