import axios from "axios";

const URL = "http://192.168.60.24:5000";

export const loginAuth = (authData) => axios.post(`${URL}/auth`, authData);

export const fetchDailyRecord = () => axios.get(`${URL}/DailyRecord`);

export const fetchFood = () => axios.get(`${URL}/sample_food`);
