import { DailyRecordModel } from "../models/dailyRecord.model.js";
import { MainFoodCompositionCalculator } from "../calcs/foodComposition.calc.js";
import { SampleFoodModel } from "../models/sampleFood.model.js";
import { UserModel } from "../models/user.model.js";

export const getAllDailyRecords = async (req, res) => {
  try {
    const { userId } = req?.params;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Tham số trong đường dẫn không đúng.",
      });
    }

    const dailyRecords = await DailyRecordModel.find({ userId: userId });

    return res.status(200).json({
      success: true,
      message:
        "Lấy toàn bộ dữ liệu nhật ký dinh dưỡng hằng ngày của người dùng thành công.",
      data: dailyRecords,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const getOneDailyRecordByFilter = async (req, res) => {
  try {
    const { userId } = req?.params;
    const filter = req?.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Tham số trong đường dẫn không đúng.",
      });
    }

    const dailyRecord = await DailyRecordModel.findOne(filter)
      .where("userId === userId")
      .populate("meals.mealDetails.itemId", "foodName");

    if (!dailyRecord) {
      return res.status(400).json({
        success: false,
        message: "Nhật ký dinh dưỡng hằng ngày không tồn tại.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Lấy dữ liệu nhật ký dinh dưỡng hằng ngày của người dùng thành công.",
      data: dailyRecord,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const createDailyRecord = async (req, res) => {
  try {
    const { userId } = req?.params;
    const { recordDate, mealType, time, mealDetails } = req?.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Tham số trong đường dẫn không đúng.",
      });
    }

    if (!recordDate || !mealType || !mealDetails.length) {
      return res.status(400).json({
        success: false,
        message:
          "Thông tin tạo bữa ăn cho nhật ký dinh dưỡng hằng ngày không đúng.",
      });
    }

    mealDetails.forEach((element) => {
      if (!element.itemId) {
        return res.status(400).json({
          success: false,
          message:
            "Thông tin tạo bữa ăn cho nhật ký dinh dưỡng hằng ngày không đúng.",
        });
      }
    });

    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Người dùng không tồn tại.",
      });
    }

    const items = [];

    for (const element of mealDetails) {
      const item = await SampleFoodModel.findOne({
        _id: element.itemId,
      }).select([
        "energy",
        "protein",
        "fat",
        "carbohydrate",
        "servingSizeWeight",
        "servingSizeUnit",
      ]);

      if (!item) {
        return res.status(400).json({
          success: false,
          message: "Thực phẩm không tồn tại.",
        });
      }

      // Handle food have multiple base serving size (weight & unit) later.
      const ratio =
        element.servingSizeQuantity && element.servingSizeUnit
          ? element.servingSizeQuantity / item.servingSizeWeight
          : 1;

      element.energy = item.energy * ratio;
      element.protein = item.protein * ratio;
      element.fat = item.fat * ratio;
      element.carbohydrate = item.carbohydrate * ratio;

      items.push(element);
    }

    const mealFoodComposition = MainFoodCompositionCalculator(items);

    const meals = [
      {
        mealType: mealType,
        time: time,
        mealDetails: mealDetails,
        energy: mealFoodComposition?.energy,
        protein: mealFoodComposition?.protein,
        fat: mealFoodComposition?.fat,
        carbohydrate: mealFoodComposition?.carbohydrate,
      },
    ];

    const dailyRecord = DailyRecordModel({
      userId: userId,
      recordDate: recordDate,
      meals: meals,
      energy: mealFoodComposition?.energy,
      protein: mealFoodComposition?.protein,
      fat: mealFoodComposition?.fat,
      carbohydrate: mealFoodComposition?.carbohydrate,
    });

    await dailyRecord.save();
    
    dailyRecord.populate("meals.mealDetails.itemId", "foodName");
    
    return res.status(200).json({
      success: true,
      message: "Tạo nhật ký dinh dưỡng hằng ngày thành công.",
      data: dailyRecord,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const removeDailyRecord = async (req, res) => {
  try {
    const { dailyRecordId, userId } = req?.params;

    if (!dailyRecordId || !userId) {
      return res.status(400).json({
        success: false,
        message: "Tham số trong đường dẫn không đúng.",
      });
    }

    const dailyRecord = await DailyRecordModel.findOne({
      _id: dailyRecordId,
      userId: userId,
    });

    if (!dailyRecord) {
      return res.status(400).json({
        success: false,
        message: "Nhật ký dinh dưỡng hằng ngày không tồn tại.",
      });
    }

    await dailyRecord.remove();

    return res.status(200).json({
      success: true,
      message: "Xóa nhật ký dinh dưỡng hằng ngày thành công.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};
