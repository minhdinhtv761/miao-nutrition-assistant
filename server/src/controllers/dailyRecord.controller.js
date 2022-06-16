import { DailyRecordModel } from "../models/dailyRecord.model.js";
import { UserModel } from "../models/user.model.js";
import mongoose from "mongoose";

export const createDailyRecord = async (req, res, next) => {
  const { id, date } = req.params;
    const { mealType, time, mealDetails } = req?.body;

    // console.log(id, Date(date), req.body);

    const todayDailyRecord = await UserModel.find({
      accountId: id,
    });

    console.log(todayDailyRecord);
  try {
    
    // let today;
    // if (todayDailyRecord) {
    //   today = await DailyRecordModel.findByIdAndUpdate(
    //     todayDailyRecord._id,
    //     {
    //       userId: id,
    //       meals: [
    //         ...todayDailyRecord.meals,
    //         {
    //           mealType,
    //           time,
    //           mealDetails: { itemId: "62a8fc0613a99480c5c56e75" },
    //         },
    //       ],
    //     },
    //     { new: true }
    //   );
    // } else {
    //   today = new DailyRecordModel({
    //     userId: id,
    //     meals: [
    //       {
    //         mealType,
    //         time,
    //         mealDetails: { itemId: "62a8fc0613a99480c5c56e75" },
    //       },
    //     ],
    //   });

    //   today.save();
    // }

    return res.status(200).json(todayDailyRecord);
    // const todayDailyRecord = await UserModel.findById({ _id: id })
    //   .populate({
    //     path: "dailyRecordIds",
    //   })
    //   .then((user) => {
    //     console.log(user);
    //     return user.dailyRecordIds.find(
    //       (item) => item.recordDate === new Date().setHours(0, 0, 0, 0)
    //     );
    //   });

    // if (todayDailyRecord) {
    //  const newMeal = await DailyRecordModel.findByIdAndUpdate(
    //     todayDailyRecord._id,
    //     {
    //       meals: [
    //         ...todayDailyRecord.meals,
    //         {
    //           mealType,
    //           time,
    //           mealDetails,
    //         },
    //       ],
    //     },
    //     { new: true }
    //   );
    // } else {
    //   const newDailyRecord = new DailyRecordModel({
    //     meals: [
    //       {
    //         mealType,
    //         time,
    //         mealDetails,
    //       },
    //     ],
    //   })

    //   await newDailyRecord.save().then((result) =>
    //   {
    //     const user= await UserModel.findByIdAndUpdate({ _id: id },{
    //     dailyRecordIds: [...user.dailyRecordIds, result]
    //           })

    //            return res
    //           .status(200)
    //           .json({ success: true, message: "Đăng nhập thành công", data: user });
    //         });
    // }
  } catch (error) {
    res.status(500).json({ error: error });
    next();
  }
};
