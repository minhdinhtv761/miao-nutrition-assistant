import { AccountModel } from "../models/account.model.js";

export const getAccountByEmail = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const account = await AccountModel.findOne({
      email: email,
      password: password,
    });

    if (!account) {
      return res
        .status(400)
        .json({ success: false, message: "Sai e-mail hoặc mật khẩu" });
    } else {
      return res.status(200).json(account);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const createAccount = async (req, res) => {
  try {
    const data = req.body;

    const account = new AccountModel(data);
    await account.save();

    return res.status(200).json(account);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
