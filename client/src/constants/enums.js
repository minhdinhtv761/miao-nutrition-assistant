// export const ListItemTypes = { MEAL, FOOD };

export const NutritionLabel = {
  energy: "Calories",
  carbohydrate: "Carbs",
  fat: "Fat",
  protein: "Protein",
  servingSizeWeight: "Khẩu phần",
  totalFat: "Tổng lượng chất béo",
  saturatedFattyAcid: "Chất béo bão hòa",
  transFattyAcid: "Chất béo chuyển hóa",
  cholesterol: "Cholesterol",
  sodium: "Natri",
  totalCarbohydrate: "Tổng lượng carbohydrate",
  fiber: "Chất xơ",
  sugar: "Tổng lượng đường",
  potassium: "Kali",
  vitaminA: "Vitamin A",
  vitaminC: "Vitamin C",
  calcium: "Canxi",
  iron: "Sắt",
};

export const NutritionUnit = {
  energy: "kcal",
  carbohydrate: "g",
  fat: "g",
  protein: "g",
  // servingSizeWeight: "Khẩu phần",
  totalFat: "g",
  saturatedFattyAcid: "g",
  transFattyAcid: "g",
  cholesterol: "mg",
  sodium: "mg",
  totalCarbohydrate: "g",
  fiber: "g",
  sugar: "g",
  potassium: "mg",
  vitaminA: "mcg",
  vitaminC: "mg",
  calcium: "mg",
  iron: "mg",
};

export const MealTypes = {
  Breakfast: "Bữa sáng",
  Lunch: "Bữa trưa",
  Dinner: "Bữa tối",
  Others: "Bữa phụ",
};

export const defaultNutrition = {
  energy: 0,
  fat: 0,
  protein: 0,
  carbohydrate: 0,
};

export const targetPerWeekLable = {
  loseFast: {
    value: -1,
    label: "Giảm mỡ nhanh",
  },
  loseSlow: {
    value: -0.5,
    label: "Giảm mỡ chậm",
  },
  maintain: {
    value: 0,
    label: "Duy trì cân nặng",
  },
  gainSlow: {
    value: 0.5,
    label: "Tăng cân chậm",
  },
  gainFast: {
    value: 1,
    label: "Tăng cân nhanh",
  },
};
