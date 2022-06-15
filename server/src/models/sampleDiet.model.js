import mongoose from "mongoose";
import { DietSchema } from "./abstract_models/diet.model.js";

const schema = new DietSchema();

export const SampleDietModel = mongoose.model("sample_diets", schema);
