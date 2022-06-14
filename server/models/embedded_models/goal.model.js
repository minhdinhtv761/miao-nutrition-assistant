import mongoose from "mongoose";

const schema = new mongoose.Schema({
  startDate: {
    type: Date,
    default: new Date(),
    required: true,
  },
  targetWeight: {
    type: Number,
  },
  targetHeight: {
    type: Number,
  },
  weightPerWeek: {
    type: Number,
  },
  targetEnergy: {
    type: Number,
  },
  targetCarbohydrate: {
    type: Number,
  },
  targetFat: {
    type: Number,
  },
  targetProtein: {
    type: Number,
  },
  dietId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sample_diets",
    required: true,
  },
});

export default schema;
