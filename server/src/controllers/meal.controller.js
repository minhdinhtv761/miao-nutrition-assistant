import { DailyRecordModel } from "../models/dailyRecord.model.js";

export const createOneMealInDailyRecord = async (req, res) => {
  try {
    const { dailyRecordId } = req?.params;
    const { mealType, time, mealDetails } = req?.body;

    if (!dailyRecordId) {
      return res.status(400).json({
        success: false,
        message: "Tham số trong đường dẫn không đúng.",
      });
    }

    if (!mealType || !mealDetails.length) {
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

    const dailyRecord = await DailyRecordModel.findOne({
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

export const updateOneMealInDailyRecord = async (req, res) => {
  try {
    const { dailyRecordId, mealId } = req?.params;
    const { mealType, time, mealDetails } = req?.body;

    if (!dailyRecordId || !mealId) {
      return res.status(400).json({
        success: false,
        message: "Tham số trong đường dẫn không đúng.",
      });
    }

    if (!mealType || !mealDetails.length) {
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

    // const dailyRecord = await DailyRecordModel.findOneAndUpdate(
    //   { _id: dailyRecordId, "meals._id": mealId },
    //   {
    //     $set: {
    //       "meals.$.mealType": mealType,
    //       "meals.$.time": time,
    //       "meals.$.mealDetails": mealDetails,
    //     },
    //   },
    //   { new: true }
    // );

    const dailyRecord = await DailyRecordModel.findOne({ _id: dailyRecordId });

    if (!dailyRecord) {
      return res.status(400).json({
        success: false,
        message: "Nhật ký dinh dưỡng hằng ngày không tồn tại.",
      });
    }

    if (!dailyRecord) {
      return res.status(400).json({
        success: false,
        message: "Nhật ký dinh dưỡng hằng ngày không tồn tại.",
      });
    }

    const meal = dailyRecord.meals.id(mealId);

    if (!meal) {
      return res.status(400).json({
        success: false,
        message: "Bữa ăn không tồn tại.",
      });
    }

    meal.mealType = mealType;
    meal.time = time;
    meal.mealDetails = mealDetails;
    dailyRecord.save()

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

export const removeOneMealInDailyRecord = async (req, res) => {
  try {
    const { dailyRecordId, mealId } = req?.params;

    if (!dailyRecordId || !mealId) {
      return res.status(400).json({
        success: false,
        message: "Tham số trong đường dẫn không đúng.",
      });
    }

    const dailyRecord = await DailyRecordModel.findOne({
      _id: dailyRecordId,
    });

    if (!dailyRecord) {
      return res.status(400).json({
        success: false,
        message: "Nhật ký dinh dưỡng hằng ngày không tồn tại.",
      });
    }

    const meal = dailyRecord.meals.id(mealId);

    if (!meal) {
      return res.status(400).json({
        success: false,
        message: "Bữa ăn không tồn tại.",
      });
    }

    meal.remove();
    dailyRecord.save();

    return res.status(200).json({
      success: true,
      message: "Xóa bữa ăn cho nhật ký dinh dưỡng hằng ngày thành công.",
      data: dailyRecord,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};
