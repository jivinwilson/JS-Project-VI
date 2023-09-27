function cloneObject(obj) {
    const cloned = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = obj[key];
      }
    }
  
    return cloned;
  }
  
  // Example usage:
  const originalObject = { a: 1, b: 2, c: 3 };
  const clonedObject = cloneObject(originalObject);
  
  console.log("Original Object:", originalObject);
  console.log("Cloned Object:", clonedObject);
  