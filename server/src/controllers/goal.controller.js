import { UserModel } from "../models/user.model.js";

export const updateGoal = async (req, res) => {
  try {
    const { userId } = req?.params;
    const {
      startDate,
      startWeight,
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

    if (
      !startDate ||
      !startWeight ||
      !targetWeight ||
      !weightPerWeek ||
      !dietId
    ) {
      return res.status(400).json({
        success: false,
        message: "Thông tin cập nhật mục tiêu sức khỏe không đúng.",
      });
    }

    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        "goal.startDate": startDate,
        "goal.startWeight": startWeight,
        "goal.targetWeight": targetWeight,
        "goal.startPercentBodyFat": startPercentBodyFat,
        "goal.targetPercentBodyFat": targetPercentBodyFat,
        "goal.weightPerWeek": weightPerWeek,
        "goal.dietId": dietId,
      },
      { new: true }
    );

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Người dùng không tồn tại.",
      });
    }

    return res
      .status(200)
      .json({
        success: true,
        message: "Cập nhật mục tiêu sức khỏe thành công.",
        data: user,
      });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};
