import { SampleDietModel } from "../models/sampleDiet.model.js";

export const getAllSampleDiets = async (req, res) => {
  try {
    const sampleDiets = await SampleDietModel.find();

    return res.status(200).json({
      success: true,
      message: "Lấy toàn bộ dữ liệu chế độ ăn mẫu thành công.",
      data: sampleDiets,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};
