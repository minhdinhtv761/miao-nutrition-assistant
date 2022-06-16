import axios from "axios";

const URL = "http://10.0.180.20:5000";

export const loginAuth = (authData) =>
  axios.post(`${URL}/account/login`, authData);

export const getUserByAccountID = (accountId) =>
  axios.get(`${URL}/account/${accountId}/user`);

export const updateUser = (user) =>
  axios.patch(`${URL}/user/${user._id}`, user);

export const fetchFood = () => axios.get(`${URL}/sample-food`);
