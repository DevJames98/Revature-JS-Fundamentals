/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
  for (let property in someObj) {
    //Gets the value of the object by using the key reference
    console.log(`Property: ${property} || Value: ${someObj[property]}`);
  }
}

const obj = {
  fName: "John",
  lName: "Doe",
  age: 22
};

objectProperties(obj);
