import { UserModel } from "../models/user.model.js";

export const getUserByAccountId = async (req, res) => {
  try {
    const {id} = req.params;

    const user = await UserModel.findOne({accountId: id});
    // const user = await UserModel.find();

    return res.status(200).json(user);

  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      { _id: user._id },
      user,
      {
        new: true,
      }
    );

    return res
      .status(200)
      .json({
        success: true,
        message: "Cập nhật thông tin cá nhân người dùng thành công.",
        data: updatedUser,
      });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};

// const age = new Date().getFullYear() - user.birthday.getFullYear();

// const bmi = bmiCaculator(weight, height);
// const bmr = bmrCalculator(percentBodyFat);
// const tdee = tdeeCalculator(bmr, user.activity);

// let newBodyComposition = {
//   recordDate: new Date(),
//   weight: weight,
//   height: height,
//   percentBodyFat: percentBodyFat,
//   BMI: bmi,
//   BMR: bmr,
//   TDEE: tdee,
//   activity: user.activity,
// }
