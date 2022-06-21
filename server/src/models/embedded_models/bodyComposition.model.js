import mongoose from "mongoose";
import { PracticeFrequency } from "../../constants/enums.js";

const schema = new mongoose.Schema({
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
    set: (h) => Math.round(h),
    get: (h) => Math.round(h),
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
    set: (bmi) => Math.round(bmi * 10) / 10,
    get: (bmi) => Math.round(bmi * 10) / 10,
    required: true,
  },
  BMR: {
    type: Number,
    set: (bmr) => Math.round(bmr),
    get: (bmr) => Math.round(bmr),
    required: true,
  },
  TDEE: {
    type: Number,
    set: (tdee) => Math.round(tdee),
    get: (tdee) => Math.round(tdee),
    required: true,
  },
});

export default schema;
