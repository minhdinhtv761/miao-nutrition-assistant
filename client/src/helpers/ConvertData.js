export const convertDateObject = (dateObject) => {
  return new Date(dateObject.$date);
};

export const handleUserObject = (user) => {
  let userData = { ...user };
  
  console.log("user in function", userData)
  delete userData._id;
  delete userData.accountId;
  userData.birthday = userData.birthday.toJSON();
  userData.goal.dietId = userData.goal.dietId.$oid;
  userData.bodyComposition.forEach((object) => {
    object.recordDate = convertDateObject(object.recordDate).toJSON();
  });
  return userData;
};
