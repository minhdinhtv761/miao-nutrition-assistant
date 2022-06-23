import {
  EnergyToGainOneKilogram,
  EnergyToLoseOneKilogram,
} from "../constants/enums.js";

export const goalTargetCalculator = ({ tdee, diet, weightPerWeek = 0 }) => {
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
      ? (weightPerWeek * EnergyToGainOneKilogram) / 7 //Divide 7 to get energy per day.
      : (weightPerWeek * EnergyToLoseOneKilogram) / 7;

  return {
    targetEnergy: Math.round(targetEnergy),
    targetProtein:
      Math.round(((targetEnergy * (diet.percentProtein / 100)) / 4) * 10) / 10, // Default 1g protein = 4kcal energy
    targetFat:
      Math.round(((targetEnergy * (diet.percentFat / 100)) / 9) * 10) / 10, // Default 1g protein = 9kcal energy
    targetCarbohydrate:
      Math.round(((targetEnergy * (diet.percentCarbohydrate / 100)) / 4) * 10) /
      10, // Default 1g protein = 4kcal energy
  };
};
