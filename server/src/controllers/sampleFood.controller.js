import { SampleFoodModel } from "../models/sampleFood.model.js";

export const getAllSampleFoods = async (req, res) => {
  try {
    const sampleFoods = await SampleFoodModel.find();
    
    return res.status(200).json({
      success: true,
      message: "Lấy toàn bộ dữ liệu thức ăn mẫu thành công.",
      data: sampleFoods,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};
