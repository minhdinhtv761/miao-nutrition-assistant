import { DateTimeUtil } from "../utils/dateTime.util.js";
import { UserModel } from "../models/user.model.js";
import { goalTargetCalculator } from "../calcs/goalComposition.calc.js";

export const updateGoal = async (req, res) => {
  try {
    const { userId } = req?.params;
    const {
      targetWeight,
      startPercentBodyFat,
      targetPercentBodyFat,
      weightPerWeek,
      dietId,
    } = req?.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Tham số trong đường dẫn không đúng.",
      });
    }

    if (!targetWeight || !weightPerWeek || !dietId) {
      return res.status(400).json({
        success: false,
        message: "Thông tin cập nhật mục tiêu sức khỏe không đúng.",
      });
    }
    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        "goal.startDate": DateTimeUtil.TODAY,
        "goal.targetWeight": targetWeight,
        "goal.startPercentBodyFat": startPercentBodyFat,
        "goal.targetPercentBodyFat": targetPercentBodyFat,
        "goal.weightPerWeek": weightPerWeek,
        "goal.dietId": dietId,
      },
      { new: true }
    ).populate("goal.dietId");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Người dùng không tồn tại.",
      });
    }
    const { weight, TDEE } = user.bodyComposition;
    const goal = goalTargetCalculator({
      tdee: TDEE,
      diet: user.goal.dietId,
      weightPerWeek: weightPerWeek,
    });
    user.goal.startWeight = weight;
    Object.keys(goal).map((key) => (user.goal[key] = goal[key]));
    console.log(user)
    user.save();

    return res.status(200).json({
      success: true,
      message: "Cập nhật mục tiêu sức khỏe thành công.",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};
