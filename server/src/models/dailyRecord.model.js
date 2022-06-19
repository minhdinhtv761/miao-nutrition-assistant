// import { MainFoodCompositionSchema } from "../abstract_models/mainFoodComposition.model.js";

import { MainFoodCompositionSchema } from "./abstract_models/mainFoodComposition.model.js";
import mealSchema from "./embedded_models/meal.model.js";
import mongoose from "mongoose";

const schema = new MainFoodCompositionSchema();

schema.add({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  recordDate: {
    type: Date,
    unique: true,
    required: true,
    default: new Date(),
  },
  meals: {
    type: [mealSchema],
    required: true,
  },
});

export const DailyRecordModel = mongoose.model("daily_records", schema);
