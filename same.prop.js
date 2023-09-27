function objectsHaveSameProperties(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // Check if both objects have the same number of properties
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Check if all properties in obj1 also exist in obj2 with the same values
    for (const key of keys1) {
      if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const object1 = { a: 1, b: 2, c: 3 };
  const object2 = { a: 1, b: 2, c: 3 };
  const object3 = { a: 1, b: 2, c: 4 };
  
  console.log("object1 and object2 have the same properties:", objectsHaveSameProperties(object1, object2)); // true
  console.log("object1 and object3 have the same properties:", objectsHaveSameProperties(object1, object3)); // false
  