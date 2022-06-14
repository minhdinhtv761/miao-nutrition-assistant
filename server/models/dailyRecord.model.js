import mongoose from "mongoose";
import { MainFoodCompositionSchema } from "../abstract_models/mainFoodComposition.model.js";
import mealSchema from "./embedded_models/meal.model.js";

const schema = new MainFoodCompositionSchema();

schema.add({
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
  meals: {
    type: [mealSchema],
    default: [],
  },
});

export const DailyRecordModel = mongoose.model("daily_records", schema);
