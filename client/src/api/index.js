import axios from "axios";

const URL = "http://192.168.2.86:5000";

export const loginAuth = (authData) => axios.post(`${URL}/auth`, authData);

export const fetchUserByAccountID = (accountID) =>
  axios.get(`${URL}/account/${accountID}/user`);

export const updateUser = (payload) => {
  const { userID, user } = payload;
  return axios.patch(`${URL}/user/${userID}`, user);
};

export const fetchFood = () => axios.get(`${URL}/sample_food`);
