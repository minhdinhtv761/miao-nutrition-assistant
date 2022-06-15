import mongoose from "mongoose";
import util from "util";

export function MainFoodCompositionSchema () {
  // call super
  mongoose.Schema.apply(this, arguments);
  // add
  this.add({
    energy: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      set: (e) => Math.round(e),
      get: (e) => Math.round(e),
    },
    protein: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      set: (p) => Math.round(p * 10) / 10,
      get: (p) => Math.round(p * 10) / 10,
    },
    fat: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      set: (f) => Math.round(f * 10) / 10,
      get: (f) => Math.round(f * 10) / 10,
    },
    carbohydrate: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      set: (c) => Math.round(c * 10) / 10,
      get: (c) => Math.round(c * 10) / 10,
    },
  });
}

util.inherits(MainFoodCompositionSchema, mongoose.Schema);
