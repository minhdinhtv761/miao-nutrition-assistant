import moment from "moment";

export const bmrCalculator = (percentBodyFat, gender, weight, height, age) => {
  if (percentBodyFat) {
    return 370 + 21.6 * weight * (1 - percentBodyFat / 100);
  }
  if (gender === "Female") {
    return 10.0 * weight + 6.25 * height - 5 * age - 161;
  }
  if (gender === "Male") {
    return 10.0 * weight + 6.25 * height - 5 * age + 5;
  }
};

export const bmiCaculator = (weight, height) =>
  Math.round((weight / (height * height)) * 10) / 10;

export const tdeeCalculator = (bmr, activity) => {
  let constNumber;

  switch (activity) {
    case "Rarely":
      constNumber = 1.2;
      break;
    case "Occasionally":
      constNumber = 1.375;
      break;
    case "Sometimes":
      constNumber = 1.55;
      break;
    case "Normally":
      constNumber = 1.725;
      break;
    case "Always":
      constNumber = 1.9;
      break;
    default:
      break;
  }

  return Math.round(constNumber * bmr);
};

export const weightRecommendation = (height) => {
  //height (cm) => height (m)
  const convertedHeight = height / 100;
  //normal BMI: 18.5 - 24.9
  const min = 18.5 * convertedHeight * convertedHeight;
  const max = 24.9 * convertedHeight * convertedHeight;
  return { min: Math.round(min * 10) / 10, max: Math.round(max * 10) / 10 };
};
