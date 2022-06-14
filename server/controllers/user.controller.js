import { UserModel } from "../models/user.model.js";

<<<<<<< HEAD
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
=======
export const getUserByAccountId = async (req, res) => {};
>>>>>>> cce460ccc752271bde5c088299918260fbfdb915

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

<<<<<<< HEAD
    return res.status(200).json(updatedUser);
=======
    return res
      .status(200)
      .json({
        success: true,
        message: "Cập nhật thông tin cá nhân người dùng thành công.",
        data: updatedUser,
      });
>>>>>>> cce460ccc752271bde5c088299918260fbfdb915
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};

<<<<<<< HEAD
=======
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
>>>>>>> cce460ccc752271bde5c088299918260fbfdb915
