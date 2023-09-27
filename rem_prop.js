function removeProperty(obj, property) {
    if (obj.hasOwnProperty(property)) {
      delete obj[property];
    }
  }
  
  // Example usage:
  const myObject = { a: 1, b: 2, c: 3 };
  
  console.log("Before removing property 'b':", myObject);
  removeProperty(myObject, "b");
  console.log("After removing property 'b':", myObject);
  