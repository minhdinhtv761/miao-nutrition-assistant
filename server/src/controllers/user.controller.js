import { UserModel } from "../models/user.model.js";

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

export const createUser = async (req, res) => {
  try {
    const {
      accountId,
      username,
      gender,
      birthday,
      backgroundDiseases,
      bodyComposition,
      goal,
    } = req?.body;

    if (!accountId || !gender || !birthday || !goal) {
      return res.status(200).json({
        success: true,
        message: "Thông tin tạo người dùng không đúng",
        data: user,
      });
    }

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

    return res.status(201).json({
      success: true,
      message: "Tạo thông tin cá nhân người dùng thành công.",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
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
