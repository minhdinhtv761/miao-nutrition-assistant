import { UserModel } from "../models/user.model.js";

export const getUserByAccountId = async (req, res) =>{

}

export const updateUser = async (req, res) => {
  try {
    const user = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate({ _id: user._id }, user, {
      new: true,
    });

    return res.status(200).json(updatedUser);
    
  } catch (error) {
    return res.status(500).json({ error: error });
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
