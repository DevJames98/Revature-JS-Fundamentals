/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  //Divides number by two. If it's an even number, the result will be an integer
  //If it's an odd number, it'll be a decimal, a.k.a not an integer
  let checkNum = someNum / 2;
  //Use .isInteger function to check the result
  if (Number.isInteger(checkNum)) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(4.5));
