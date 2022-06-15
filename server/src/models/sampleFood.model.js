import mongoose from "mongoose";
import { FoodSchema } from "./abstract_models/food.model.js";

const schema = new FoodSchema();

export const SampleFoodModel = mongoose.model("sample_foods", schema);
