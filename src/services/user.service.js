import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const updateUserWallet = (data) => {
  return axios.put(API_URL + "wallet", data);
};

const getUserWallet = (userId) => {
  return axios.get(API_URL + "wallet", { userId }).then((response) => {
    return response.data;
  });
};

const userService = {
  getPublicContent,
  getUserWallet,
  updateUserWallet,
};

export default userService;
