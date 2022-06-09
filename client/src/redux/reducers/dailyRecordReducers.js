// import { fetchDailyRecord, getType } from "../actions";

// const initState = {
//   isLoading: false,
//   data: [],
// };

// export default function dailyRecordReducers(state = initState, action) {
//   switch (action.type) {
//     case getType(fetchDailyRecord.fetchDailyRecordRequest):
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case getType(fetchDailyRecord.fetchDailyRecordSuccess):
//       return {
//         ...state,
//         isLoading: false,
//         data: action.payload,
//       };
//     default:
//       return state;
//   }
// }
