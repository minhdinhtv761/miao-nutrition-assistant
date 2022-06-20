import { DailyRecordModel } from "../models/dailyRecord.model.js";

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
    const filter = req?.body;
    console.log(filter)
    const dailyRecord = await DailyRecordModel.findOne(filter);
    
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

    const meals = [
      {
        mealType: mealType,
        time: time,
        mealDetails: mealDetails,
      },
    ];

    const dailyRecord = DailyRecordModel({
      userId: userId,
      recordDate: recordDate,
      meals: meals,
    });
    await dailyRecord.save();

    return res.status(200).json({
      success: true,
      message: "Tạo bữa ăn cho nhật ký dinh dưỡng hằng ngày thành công.",
      data: dailyRecord,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const updateDailyRecord = async (req, res) => {
  try {
    const { dailyRecordId, userId } = req?.params;
    const { recordDate, mealType, time, mealDetails } = req?.body;

    if (!dailyRecordId || !userId) {
      return res.status(400).json({
        success: false,
        message: "Tham số trong đường dẫn không đúng.",
      });
    }

    if (!recordDate || !mealType || !mealDetails.length) {
      return res.status(400).json({
        success: false,
        message:
          "Thông tin cập nhật bữa ăn cho nhật ký dinh dưỡng hằng ngày không đúng.",
      });
    }

    mealDetails.forEach((element) => {
      if (!element.itemId) {
        return res.status(400).json({
          success: false,
          message:
            "Thông tin cập nhật bữa ăn cho nhật ký dinh dưỡng hằng ngày không đúng.",
        });
      }
    });

    const dailyRecord = await DailyRecordModel.findOne({
      userId: userId,
      _id: dailyRecordId,
    });

    if (!dailyRecord) {
      return res.status(400).json({
        success: false,
        message: "Nhật ký dinh dưỡng hằng ngày không tồn tại.",
      });
    }

    dailyRecord.meals.push({
      mealType: mealType,
      time: time,
      mealDetails: mealDetails,
    });

    await dailyRecord.save();

    return res.status(200).json({
      success: true,
      message: "Cập nhật bữa ăn cho nhật ký dinh dưỡng hằng ngày thành công.",
      data: dailyRecord,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};
