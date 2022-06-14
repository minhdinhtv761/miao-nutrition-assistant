import { Gender, PracticeFrequency } from "../constants/enums.js";

export const BMRCalculator = (
  { percentBodyFat },
  weight,
  height,
  gender,
  age
) => {
  if (percentBodyFat) {
    return 370 + 21.6 * weight * (1 - percentBodyFat / 100);
  } else {
    if (gender === Gender.FEMALE) {
      return 10.0 * weight + 6.25 * height * 100 - 5 * age - 161;
    }
    if (gender === Gender.MALE) {
      return 10.0 * weight + 6.25 * height * 100 - 5 * age + 5;
    }
  }
};

export const BMICalculator = (weight, height) => {
  return weight / (height * height);
};

export const TDEECalculator = (bmr, practiceFrequency) => {
  if (practiceFrequency === PracticeFrequency.RARELY) constNumber = 1.2;
  if (practiceFrequency === PracticeFrequency.OCCASIONALLY) constNumber = 1.375;
  if (practiceFrequency === PracticeFrequency.SOMETIMES) constNumber = 1.55;
  if (practiceFrequency === PracticeFrequency.NORMALLY) constNumber = 1.725;
  if (practiceFrequency === PracticeFrequency.ALWAYS) constNumber = 1.9;

  return constNumber * bmr;
};
