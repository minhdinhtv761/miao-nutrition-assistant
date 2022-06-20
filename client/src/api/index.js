import axios from "axios";

const URL = "http://192.168.2.104:5000";

export const loginAuth = (authData) =>
  axios.post(`${URL}/account/login`, authData);

export const getUserByAccountID = (accountId) =>
  axios.get(`${URL}/account/${accountId}/user`);

export const updateUser = (user) =>
  axios.patch(`${URL}/user/${user._id}`, user);

export const fetchFood = () => axios.get(`${URL}/sample-food`);

/* #region  dailyRecord API */

export const getDailyRecord = ({ userId, filter }) =>
  axios.post(`${URL}/daily-record/user/${userId}/filter`, filter);

export const createDailyRecord = ({ userId, data }) => {
  console.log(userId, data);
  return axios.post(`${URL}/daily-record/user/${userId}`, data);
};

export const updateDailyRecord = ({ userId, dailyRecordId, data }) =>
  axios.post(`${URL}/daily-record/${dailyRecordId}/user/${userId}`, data);

/* #endregion */
