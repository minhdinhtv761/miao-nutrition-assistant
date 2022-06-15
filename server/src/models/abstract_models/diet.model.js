import mongoose from "mongoose";
import util from "util";

export function DietSchema() {
  // call super
  mongoose.Schema.apply(this, arguments);
  // add
  this.add({
    dietName: {
      type: String,
      required: true,
    },
    percentProtein: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      default: 0,
    },
    percentFat: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      default: 0,
    },
    percentCarbohydrate: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      default: 0,
    },
    allergenicFoodsId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "sample_foods",
        },
      ],
      default: [],
    },
  });
}

util.inherits(DietSchema, mongoose.Schema);
