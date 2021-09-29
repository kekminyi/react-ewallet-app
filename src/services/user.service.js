import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserWallet = () => {
  return axios.get(API_URL + "wallet", { headers: authHeader() });
};

const userService = {
  getPublicContent,
  getUserWallet,
};

export default userService;
