import {
  EnergyToGainOneKilogram,
  EnergyToLoseOneKilogram,
} from "../constants/enums.js";

export const goalTargetCalculator = (tdee, diet, weightPerWeek = 0) => {
  if (
    !tdee ||
    !diet?.percentProtein ||
    !diet?.percentFat ||
    !diet?.percentCarbohydrate
  ) {
    throw new Error("Params is required for calculating goal target");
  }

  let targetEnergy = tdee;

  targetEnergy +=
    weightPerWeek > 0
      ? weightPerWeek * EnergyToGainOneKilogram
      : weightPerWeek * EnergyToLoseOneKilogram;

  return {
    targetEnergy: targetEnergy,
    targetProtein: (targetEnergy * (diet.percentProtein / 100)) / 4, // Default 1g protein = 4kcal energy
    targetFat: (targetEnergy * (diet.percentFat / 100)) / 9, // Default 1g protein = 9kcal energy
    targetCarbohydrate: (targetEnergy * (diet.percentCarbohydrate / 100)) / 4, // Default 1g protein = 4kcal energy
  };
};
