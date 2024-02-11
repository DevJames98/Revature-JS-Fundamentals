/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//class creation
class classObject {
  name;
  age;
  school = {
    id: 1,
    name: "Revature School",
    address: "60 Kissena Blvd"
  };
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//Constructor Function Creation
function cFunction(name, age) {
  this.name = name;
  this.age = age;
  this.school = {
    id: 1,
    name: "Revature School",
    address: "60 Kissena Blvd"
  };
}

//Object literal creation
let objLiteral = {
  name: "John",
  age: 24,
  school: {
    id: 1,
    name: "Revature School",
    address: "60 Kissena Blvd"
  }
};

let fObj = new cFunction("John", 24);
let cObj = new classObject("John", 24);

console.log(objLiteral);
console.log(fObj);
console.log(cObj);
