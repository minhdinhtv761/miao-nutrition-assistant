import mongoose from "mongoose";
import { Gender } from "../constants/enums.js";
import bodyCompositionSchema from "./embedded_models/bodyComposition.model.js";
import goalSchema from "./embedded_models/goal.model.js";

const schema = new mongoose.Schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "accounts",
    required: true,
  },
  username: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
    enum: [Gender.FEMALE, Gender.MALE],
    default: Gender.MALE,
  },
  birthday: {
    type: Date,
    required: true,
    default: new Date(),
    max: Date(),
  },
  backgroundDiseases: {
    type: [String],
    default: [],
  },
  bodyCompositions: {
    type: [bodyCompositionSchema],
    default: [],
  },
  goal: {
    type: goalSchema,
    required: true,
  },
  dailyRecordIds: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "daily_records",
      },
    ],
    default: [],
  },
});

export const UserModel = mongoose.model("users", schema);
