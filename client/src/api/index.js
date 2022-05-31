import axios from "axios";

const URL = "http://10.0.163.52:5000";

export const fetchDailyRecord = () => axios.get(`${URL}/DailyRecord`);

export const fetchFood = () => axios.get(`${URL}/sample_food`);

// export const fetchFood = () =>
//   axios.get("https://nlmt-shop-management.herokuapp.com/KhuyenMais");
