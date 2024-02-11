/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(someNum) {
  //base case
  if (someNum === 0) {
    return 1;
  }
  //check for negative number
  else if (someNum < 0) {
    console.log("Negative Number inputted");
  } else {
    //if the number is 1 or greater
    while (someNum > 0) {
      //recursive call to find the factorial value for the number 1 less than inputted number ( ex. 7 * 6!)
      return someNum * factorial(someNum - 1);
    }
  }
}
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(15));
console.log(factorial(-1));
