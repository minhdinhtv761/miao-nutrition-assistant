import { MainFoodCompositionSchema } from "../abstract_models/mainFoodComposition.model.js";
import { MealType } from "../../constants/enums.js";
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
      MealType.SNACK,
    ],
    default: MealType.BREAKFAST,
  },
  time: {
    type: Date,
    default: new Date(),
  },
  mealDetails: {
    type: [mealDetailSchema],
    required: true,
  },
});

export default schema;
