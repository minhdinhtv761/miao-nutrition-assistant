export function covertToMealDetails(addedMealList) {
  return addedMealList.map((food) => ({
    itemId: food._id,
    servingSizeQuantity: food.servingSizeWeight,
  }));
}
