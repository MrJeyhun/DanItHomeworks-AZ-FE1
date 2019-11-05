let filterBy = (arr, type) => {
  let dataTypes = ["string", "number", "object", "array", "boolean"];
  let testDataType = dataTypes.some(dataType => type.includes(dataType));
  if (!testDataType) {
    let errorMessage = "Wrong data type";
    return errorMessage;
  }
  const filter = arr.filter(item => typeof item != type);
  console.log(filter);
};

filterBy([[2, true, "yes", "4", 3, 5.01]], "string");
