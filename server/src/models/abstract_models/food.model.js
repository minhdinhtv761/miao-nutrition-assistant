import util from "util";
import { DetailedFoodCompositionSchema } from "./detailedFoodComposition.model.js";

export function FoodSchema() {
  // call super
  DetailedFoodCompositionSchema.apply(this, arguments);
  // add
  this.add({
    foodName: {
      type: String,
      required: true,
    },
    servingSizeWeight: {
      type: Number,
      required: true,
      default: 100,
      set: (w) => Math.round(w * 100) / 100,
      get: (w) => Math.round(w * 100) / 100,
    },
    servingSizeUnit: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
  });
}

util.inherits(FoodSchema, DetailedFoodCompositionSchema);
