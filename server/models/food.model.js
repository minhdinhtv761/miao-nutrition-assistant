import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    // },
  },
);
export const FoodModels = mongoose.model("sample_foods", schema);
