import { Gender } from "../constants/enums.js";
import { AccountModel } from "../models/account.model.js";
import { UserModel } from "../models/user.model.js";

// For login
export const getAccountByEmail = async (req, res) => {
  try {
    const { email, password } = req?.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Thông tin đăng nhập không đúng.",
      });
    }

    const account = await AccountModel.findOne({
      email: email,
      password: password,
    });

    if (!account) {
      return res.status(400).json({
        success: false,
        message: "Email hoặc mật khẩu không đúng.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Đăng ký tài khoản thành công.",
      data: account,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};

// For register
export const createAccount = async (req, res) => {
  try {
    const { email, password, confirmedPassword } = req?.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Thông tin đăng ký không đúng.",
      });
    }

    const isAccountExist = await AccountModel.findOne({
      email: email,
    });

    if (isAccountExist) {
      return res
        .status(400)
        .json({ success: false, message: "Tài khoản này đã được đăng ký." });
    }

    if (password !== confirmedPassword) {
      return res.status(400).json({
        success: false,
        message: "Xác nhận lại mật khẩu mới không trùng với mật khẩu mới.",
      });
    }

    const account = new AccountModel({ email: email, password: password });
    await account.save();

    const goal = {
      startDate: new Date(),
      startWeight: 0,
      startHeight: 0,
      startPercentBodyFat: null,
      targetPercentBodyFat: null,
      weightPerWeek: 0,
      targetEnergy: 0,
      targetProtein: 0,
      targetFat: 0,
      targetCarbohydrate: 0,
      dietId: "62a4aac5df463f32e2c31d0b",
    };

    const user = new UserModel({
      accountId: account._id,
      gender: Gender.MALE,
      birthday: new Date(),
      goal: goal,
    });
    await user.save();

    return res.status(201).json({
      success: true,
      message: "Đăng ký tài khoản thành công.",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};

// For change password
export const updateAccount = async (req, res) => {
  try {
    const { email, password, newPassword, confirmedNewPassword } = req?.body;

    if (!email || !password || !newPassword || !confirmedNewPassword) {
      return res.status(400).json({
        success: false,
        message: "Thông tin cập nhật mật khẩu không đúng.",
      });
    }

    if (newPassword !== confirmedNewPassword) {
      return res.status(400).json({
        success: false,
        message: "Xác nhận lại mật khẩu mới không trùng với mật khẩu mới.",
      });
    }

    const account = await AccountModel.findOneAndUpdate(
      { email: email, password: password },
      { password: newPassword },
      { new: true }
    );

    if (account) {
      return res.status(200).json({
        success: true,
        message: "Cập nhật mật khẩu mới cho tài khoản thành công.",
        data: account,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Email hoặc mật khẩu không đúng.",
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};
