import { DailyRecordModel } from "../models/dailyRecord.model.js";
import { MainFoodCompositionCalculator } from "../calcs/foodComposition.calc.js";
import { SampleFoodModel } from "../models/sampleFood.model.js";

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

    dailyRecord.meals.push({
      mealType: mealType,
      time: time,
      mealDetails: mealDetails,
      energy: mealFoodComposition?.energy,
      protein: mealFoodComposition?.protein,
      fat: mealFoodComposition?.fat,
      carbohydrate: mealFoodComposition?.carbohydrate,
    });

    const dailyRecordFoodComposition = MainFoodCompositionCalculator(
      dailyRecord.meals
    );

    dailyRecord.energy = dailyRecordFoodComposition?.energy;
    dailyRecord.protein = dailyRecordFoodComposition?.protein;
    dailyRecord.fat = dailyRecordFoodComposition?.fat;
    dailyRecord.carbohydrate = dailyRecordFoodComposition?.carbohydrate;

    await dailyRecord.save().then((result) => {
      DailyRecordModel.findById(result._id)
        .populate("meals.mealDetails.itemId", "foodName")
        .exec()
        .then((newResult) =>
        {
          res.status(200).json({
            success: true,
            message: "Tạo nhật ký dinh dưỡng hằng ngày thành công.",
            data: newResult,
          })
        }
        );
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

    meal.mealType = mealType;
    meal.time = time;
    meal.mealDetails = mealDetails;
    meal.energy = mealFoodComposition?.energy;
    meal.protein = mealFoodComposition?.protein;
    meal.fat = mealFoodComposition?.fat;
    meal.carbohydrate = mealFoodComposition?.carbohydrate;

    const dailyRecordFoodComposition = MainFoodCompositionCalculator(
      dailyRecord.meals
    );

    dailyRecord.energy = dailyRecordFoodComposition?.energy;
    dailyRecord.protein = dailyRecordFoodComposition?.protein;
    dailyRecord.fat = dailyRecordFoodComposition?.fat;
    dailyRecord.carbohydrate = dailyRecordFoodComposition?.carbohydrate;

    await dailyRecord.save().then((result) => {
      DailyRecordModel.findById(result._id)
        .populate("meals.mealDetails.itemId", "foodName")
        .exec()
        .then((newResult) =>
        {
          res.status(200).json({
            success: true,
            message: "Tạo nhật ký dinh dưỡng hằng ngày thành công.",
            data: newResult,
          })
        }
        );
    });
    // return res.status(200).json({
    //   success: true,
    //   message: "Cập nhật bữa ăn cho nhật ký dinh dưỡng hằng ngày thành công.",
    //   data: dailyRecord,
    // });
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

    await meal.remove();

    if (dailyRecord.meals.length === 0) {
      await dailyRecord.remove();

      return res.status(200).json({
        success: true,
        message: "Xóa nhật ký dinh dưỡng hằng ngày thành công.",
      });
    } else {
      const dailyRecordFoodComposition = MainFoodCompositionCalculator(
        dailyRecord.meals
      );

      dailyRecord.energy = dailyRecordFoodComposition?.energy;
      dailyRecord.protein = dailyRecordFoodComposition?.protein;
      dailyRecord.fat = dailyRecordFoodComposition?.fat;
      dailyRecord.carbohydrate = dailyRecordFoodComposition?.carbohydrate;

      await dailyRecord.save();

      return res.status(200).json({
        success: true,
        message: "Xóa bữa ăn cho nhật ký dinh dưỡng hằng ngày thành công.",
        data: dailyRecord,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};
