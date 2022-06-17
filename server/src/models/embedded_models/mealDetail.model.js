import mongoose from "mongoose";
import { MainFoodCompositionSchema } from "../abstract_models/mainFoodComposition.model.js";

const schema = new MainFoodCompositionSchema();

schema.add(
  {
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sample_foods",
      required: true,
    },
    servingSizeQuantity: {
      type: Number,
      default: 100,
    },
  },
);

schema.set("_id", false)

export default schema;
