function getPropertyValues(obj, property) {
    const valuesArray = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && key === property) {
        valuesArray.push(obj[key]);
      }
    }
  
    return valuesArray;
  }
  
  // Example usage:
  const myObject = { a: 1, b: 2, c: 3, b: 4 };
  const propertyName = "b";
  const propertyValues = getPropertyValues(myObject, propertyName);
  console.log(`Values of property "${propertyName}":`, propertyValues);
  