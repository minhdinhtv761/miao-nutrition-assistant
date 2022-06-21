import moment from "moment";
import { Gender, PracticeFrequency } from "../constants/enums.js";

// weight unit: kg (toFixed(1))
// heght unit: cm (toFixed(0))
// birthday format: Date (type of JavaScript) || JSON || String || moment

export const BMRCalculator = (
  weight,
  height,
  gender,
  birthday,
  percentBodyFat = null
) => {
  if (!weight) {
    throw new Error("Params is required for calculating BMR");
  }

  const age = moment().year() - moment(birthday).year();

  if (percentBodyFat) {
    return 370 + 21.6 * weight * (1 - percentBodyFat / 100);
  } else {
    if (!gender || !height) {
      throw new Error("Params is required for calculating BMR");
    }

    let result = 0;

    if (gender === Gender.FEMALE) {
      result = 10.0 * weight + 6.25 * height - 5 * age - 161;
    }
    if (gender === Gender.MALE) {
      result = 10.0 * weight + 6.25 * height - 5 * age + 5;
    }

    return Math.round(result)
  }
};

export const BMICalculator = (weight, height) => {
  if (!weight || !height) {
    throw new Error("Params is required for calculating BMI");
  }

  return Math.round(weight / Math.pow(height / 100, 2) * 10) / 10;
};

export const TDEECalculator = (bmr, practiceFrequency) => {
  if (!bmr || !practiceFrequency) {
    throw new Error("Params is required for calculating TDEE");
  }

  let constNumber = null;

  if (practiceFrequency === PracticeFrequency.RARELY) constNumber = 1.2;
  if (practiceFrequency === PracticeFrequency.OCCASIONALLY) constNumber = 1.375;
  if (practiceFrequency === PracticeFrequency.SOMETIMES) constNumber = 1.55;
  if (practiceFrequency === PracticeFrequency.NORMALLY) constNumber = 1.725;
  if (practiceFrequency === PracticeFrequency.ALWAYS) constNumber = 1.9;

  if (!constNumber) {
    throw new Error("Params is required for calculating TDEE");
  }

  return Math.round(constNumber * bmr);
};
