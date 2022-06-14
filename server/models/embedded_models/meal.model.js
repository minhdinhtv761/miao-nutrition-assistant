import { MealType } from "../../constants/enums";
import { MainFoodCompositionSchema } from "../abstract_models/mainFoodComposition.model.js";
import mealDetailSchema from "./mealDetail.model.js";

const schema = new MainFoodCompositionSchema();

schema.add({
  mealType: {
    type: String,
    required: true,
    enum: [
      MealType.BREAKFAST,
      MealType.LUNCH,
      MealType.DINNER,
      MealType.OTHERS,
    ],
    default: MealType.BREAKFAST,
  },
  time: {
    type: Date,
    default: new Date(),
  },
  mealDetails: {
    type: [mealDetailSchema],
  },
});

export default schema;
