import {
  BMICalculator,
  BMRCalculator,
  TDEECalculator,
} from "../calcs/bodyComposition.calc.js";
import { goalTargetCalculator } from "../calcs/goalComposition.calc.js";
import { DefaulyDietId } from "../constants/enums.js";
import { BodyCompositionHistoryModel } from "../models/bodyCompositionRecord.model.js";
import { SampleDietModel } from "../models/sampleDiet.model.js";
import { UserModel } from "../models/user.model.js";
import { DateTimeUtil } from "../utils/dateTime.util.js";

export const getUserByAccountId = async (req, res) => {
  try {
    const { id } = req?.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Tham số trong đường dẫn không đúng.",
      });
    }

    const user = await UserModel.findOne({ accountId: id });

    if (user) {
      return res.status(200).json({
        success: true,
        message: "Lấy thông tin cá nhân người dùng của tài khoản thành công",
        data: user,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Người dùng không tồn tại.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

// Function is always called in createAccount calls and cannot been called in router.
export const createUser = async (req, res) => {
  try {
    const {
      accountId,
      username,
      gender,
      birthday,
      backgroundDiseases,
      bodyComposition,
    } = req;

    if (
      !accountId ||
      !gender ||
      !birthday ||
      !bodyComposition?.weight ||
      !bodyComposition?.height ||
      !bodyComposition?.activity
    ) {
      return {
        statusCode: 400,
        data: {
          success: true,
          message: "Thông tin tạo người dùng không đúng.",
        },
      };
    }

    bodyComposition.recordDate = DateTimeUtil.TODAY;
    bodyComposition.BMR = BMRCalculator(
      bodyComposition.weight,
      bodyComposition.height,
      gender,
      birthday
    );
    bodyComposition.BMI = BMICalculator(
      bodyComposition.weight,
      bodyComposition.height
    );
    bodyComposition.TDEE = TDEECalculator(
      bodyComposition.BMR,
      bodyComposition.activity
    );

    const diet = await SampleDietModel.findOne({ _id: DefaulyDietId }).select([
      "percentProtein",
      "percentFat",
      "percentCarbohydrate",
    ]);

    if (!diet) {
      return {
        statusCode: 500,
        data: {
          success: true,
          message: "Chế độ ăn mẫu không tồn tại.",
        },
      };
    }

    const goalTarget = goalTargetCalculator(bodyComposition.TDEE, diet);

    const goal = {
      startDate: DateTimeUtil.TODAY,
      startWeight: bodyComposition.weight,
      targetWeight: bodyComposition.weight,
      startPercentBodyFat: null,
      targetPercentBodyFat: null,
      weightPerWeek: 0,
      targetEnergy: goalTarget.targetEnergy,
      targetProtein: goalTarget.targetProtein,
      targetFat: goalTarget.targetFat,
      targetCarbohydrate: goalTarget.targetCarbohydrate,
      dietId: DefaulyDietId,
    };

    const user = UserModel({
      accountId: accountId,
      username: username,
      gender: gender,
      birthday: birthday,
      backgroundDiseases: backgroundDiseases,
      bodyComposition: bodyComposition,
      goal: goal,
    });

    await user.save();

    const bodyCompositionHistory = BodyCompositionHistoryModel({
      userId: user._id,
      history: [bodyComposition],
    });

    await bodyCompositionHistory.save();

    return {
      statusCode: 200,
      data: {
        success: true,
        message: "Tạo thông tin cá nhân người dùng thành công.",
        data: user,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      data: { success: false, message: error },
    };
  }
};

// For update normal user information (include username, gender, birthday, backgroundDiseases)
export const updateUser = async (req, res) => {
  try {
    const { id } = req?.params;
    const { username, gender, birthday, backgroundDiseases } = req?.body;

    if (!id || !gender || !birthday) {
      return res.status(200).json({
        success: true,
        message: "Thông tin cập nhật người dùng không đúng.",
      });
    }

    const user = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        username: username,
        gender: gender,
        birthday: birthday,
        backgroundDiseases: backgroundDiseases,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Cập nhật thông tin cá nhân người dùng thành công.",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};
