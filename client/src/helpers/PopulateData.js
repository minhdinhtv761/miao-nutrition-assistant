export const populateById = (array, id) =>
  array.find((item) => item._id.$oid === id.$oid);

export const populateArray = (sourceArray, destination) =>
  destination.length
    ? destination.map((id) => populateById(sourceArray, id))
    : [];
