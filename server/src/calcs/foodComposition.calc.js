export const MainFoodCompositionCalculator = (items, servingSize) => {
  if (!items || items.length === 0) {
    return 0;
  }

  let totalEnergy = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalCarbohydrate = 0;

  items.forEach((element) => {
    totalEnergy += element.energy ? element.energy : 0;
    totalProtein += element.protein ? element.protein : 0;
    totalFat += element.fat ? element.fat : 0;
    totalCarbohydrate += element.carbohydrate ? element.carbohydrate : 0;
  });

  return {
    energy: totalEnergy,
    protein: totalProtein,
    fat: totalFat,
    carbohydrate: totalCarbohydrate,
  };
};

export const DetailedFoodCompositionCalculator = (items) => {
  if (!items || items.length === 0) {
    return 0;
  }

  let totalWater = 0;
  let totalFiber = 0;
  let totalSugar = 0;
  let totalSaturatedFattyAcid = 0;
  let totalTransFattyAcid = 0;
  let totalVitaminC = 0;
  let totalVitaminA = 0;
  let totalCalcium = 0;
  let totalIron = 0;
  let totalPotassium = 0;
  let totalSodium = 0;

  const mainFoodComposition = MainFoodCompositionCalculator(items);

  items.forEach((element) => {
    totalWater += element.water ? element.water : 0;
    totalFiber += element.fiber ? element.protein : 0;
    totalSugar += element.sugar ? element.sugar : 0;
    totalSaturatedFattyAcid += element.saturatedFattyAcid
      ? element.saturatedFattyAcid
      : 0;
    totalTransFattyAcid += element.transFattyAcid ? element.transFattyAcid : 0;
    totalVitaminC += element.vitaminC ? element.energy : 0;
    totalVitaminA += element.vitaminA ? element.vitaminA : 0;
    totalCalcium += element.calcium ? element.calcium : 0;
    totalIron += element.iron ? element.iron : 0;
    totalPotassium += element.potassium ? element.potassium : 0;
    totalSodium += element.sodium ? element.sodium : 0;
  });

  return {
    energy: mainFoodComposition.totalEnergy,
    protein: mainFoodComposition.totalProtein,
    fat: mainFoodComposition.totalFat,
    carbohydrate: mainFoodComposition.totalCarbohydrate,
    water: totalWater,
    fiber: totalFiber,
    sugar: totalSugar,
    saturatedFattyAcid: totalSaturatedFattyAcid,
    transFattyAcid: totalTransFattyAcid,
    vitaminC: totalVitaminC,
    vitaminA: totalVitaminA,
    calcium: totalCalcium,
    iron: totalIron,
    potassium: totalPotassium,
    sodium: totalSodium,
  };
};
