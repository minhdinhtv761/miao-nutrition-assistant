import mongoose from "mongoose";
import { PracticeFrequency } from "../constants/enums.js";

const schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  recordDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  weight: {
    type: Number,
    required: true,
    default: 0,
    set: (w) => Math.round(w * 10) / 10,
    get: (w) => Math.round(w * 10) / 10,
  },
  height: {
    type: Number,
    required: true,
    default: 0,
    set: (h) => Math.round(h * 10) / 10,
    get: (h) => Math.round(h * 10) / 10,
  },
  percentBodyFat: {
    type: Number,
    default: null,
    min: 0,
    max: 100,
    set: (f) => Math.round(f),
    get: (f) => Math.round(f),
  },
  activity: {
    type: String,
    required: true,
    enum: [
      PracticeFrequency.RARELY,
      PracticeFrequency.OCCASIONALLY,
      PracticeFrequency.SOMETIMES,
      PracticeFrequency.NORMALLY,
      PracticeFrequency.ALWAYS,
    ],
    default: PracticeFrequency.RARELY,
  },
  BMI: {
    type: Number,
    set: (bmi) => Math.round(bmi * 100) / 100,
    get: (bmi) => Math.round(bmi * 100) / 100,
  },
  BMR: {
    type: Number,
    set: (bmr) => Math.round(bmr * 100) / 100,
    get: (bmr) => Math.round(bmr * 100) / 100,
  },
  TDEE: {
    type: Number,
    set: (tdee) => Math.round(tdee),
    get: (tdee) => Math.round(tdee),
  },
});

export const BodyCompositionModel = mongoose.model("bodyCompositions", schema);
