import axios from "axios";

const URL = "http://localhost:5000";

export const fetchDailyRecord = () => axios.get(`${URL}/DailyRecord`);

export const fetchFood = () =>
  axios.get("https://nlmt-shop-management.herokuapp.com/KhuyenMais");
