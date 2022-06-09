export const calcPercent = (child, parent) =>
  parent ? Math.round((child / parent) * 100) : 0;
export const calcNutritionPercent = (food) => {
  const carbPercent = calcPercent(food.carbohydrate * 4, food.energy);
  const fatPercent = calcPercent(food.fat * 9, food.energy);
  const proteinPercent = food.energy ? 100 - carbPercent - fatPercent : 0;
  return {
    carbohydrate: {
      value: food.carbohydrate,
      percent: carbPercent,
    },
    fat: {
      value: food.fat,
      percent: fatPercent,
    },
    protein: {
      value: food.protein,
      percent: proteinPercent,
    },
  };
};
