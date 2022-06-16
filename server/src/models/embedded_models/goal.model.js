import mongoose from "mongoose";

const schema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  startWeight: {
    type: Number,
    required: true,
    default: 0,
    set: (w) => Math.round(w * 10) / 10,
    get: (w) => Math.round(w * 10) / 10,
  },
  targetWeight: {
    type: Number,
    required: true,
    default: 0,
    set: (w) => Math.round(w * 10) / 10,
    get: (w) => Math.round(w * 10) / 10,
  },
  startPercentBodyFat: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
    set: (f) => Math.round(f * 10) / 10,
    get: (f) => Math.round(f * 10) / 10,
  },
  targetPercentBodyFat: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
    set: (f) => Math.round(f * 10) / 10,
    get: (f) => Math.round(f * 10) / 10,
  },
  weightPerWeek: {
    type: Number,
    required: true,
    default: 0,
    set: (w) => Math.round(w * 10) / 10,
    get: (w) => Math.round(w * 10) / 10,
  },
  targetEnergy: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    set: (e) => Math.round(e),
    get: (e) => Math.round(e),
  },
  targetProtein: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    set: (p) => Math.round(p * 10) / 10,
    get: (p) => Math.round(p * 10) / 10,
  },
  targetFat: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    set: (f) => Math.round(f * 10) / 10,
    get: (f) => Math.round(f * 10) / 10,
  },
  targetCarbohydrate: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    set: (c) => Math.round(c * 10) / 10,
    get: (c) => Math.round(c * 10) / 10,
  },
  dietId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sample_diets",
    required: true,
  },
});

export default schema;
