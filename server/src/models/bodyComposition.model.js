import mongoose from "mongoose";
import bodyCompositionSchema from "./embedded_models/bodyComposition.model.js";

const schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  record: {
    type: [bodyCompositionSchema],
    required: true,
  },
});

export const BodyCompositionHistoryModel = mongoose.model(
  "bodycomposition_records",
  schema
);
