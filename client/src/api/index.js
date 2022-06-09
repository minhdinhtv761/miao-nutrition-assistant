import axios from "axios";

const URL = "http://192.168.137.1:5000";

export const loginAuth = (authData) => axios.post(`${URL}/auth`, authData);

export const fetchUserByAccountID = (accountID) =>axios.get(`${URL}/account/${accountID}/user`)

export const fetchFood = () => axios.get(`${URL}/sample_food`);
