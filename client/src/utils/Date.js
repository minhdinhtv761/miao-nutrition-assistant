import moment from "moment";

export const startOfDate = (date) => new Date(moment(date).startOf("day"));
