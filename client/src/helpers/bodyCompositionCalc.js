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

export const createNewBodyComposition = (user) => {
  const age = new Date().getFullYear() - user.birthday.getFullYear();

  const bmi = bmiCaculator(user.weight, user.height);
  const bmr = bmrCalculator(
    user.percentBodyFat,
    user.gender,
    user.weight,
    user.height,
    age
  );
  const tdee = tdeeCalculator(bmr, user.activity);

  let newBodyComposition = {
    recordDate: new Date(),
    weight: user.weight,
    height: user.height,
    percentBodyFat: user.percentBodyFat,
    BMI: bmi,
    BMR: bmr,
    TDEE: tdee,
    activity: user.activity,
  };

  return newBodyComposition;
};
