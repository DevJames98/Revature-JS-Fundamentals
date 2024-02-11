/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
  //Var used to make sure that the input is a palindrome
  let check = true;
  //The starting index when checking the input (from beginning)
  let check1 = 0;
  //The starting index when checking the input (from ending)
  let check2 = someStr.length - 1;

  //If the length of the input is even
  if (isEven(someStr.length)) {
    //set midpoint
    let midpoint = someStr.length / 2;
    for (check1; check1 < midpoint; check1++) {
      if (someStr[check1] === someStr[check2]) {
        //decrements the index you're checking (the one going right to left)
        check2--;
      } else {
        check = false;
        //Ends code since proven false
        break;
      }
    }
  }
  //If the input is odd, it'll skip the midpoint since there is nothing to compare it to
  else {
    let midpoint = someStr.length + 0.5;
    for (check1; check1 < midpoint; check1++) {
      if (someStr[check1] === someStr[check2]) {
        //decrements the index you're checking (the one going right to left)
        check2--;
      } else {
        check = false;
        //Ends code since proven false
        break;
      }
    }
  }
  //Prints message based on the value of the check var
  if (check) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
}

//Function from problem 06; used to check if the input is even
function isEven(someNum) {
  let checkNum = someNum / 2;
  if (Number.isInteger(checkNum)) {
    return true;
  } else {
    return false;
  }
}

let test1 = "2002";
let test2 = "4002";
let test3 = "eve";
let test4 = "even";

isPalindrome(test1);
isPalindrome(test2);
isPalindrome(test3);
isPalindrome(test4);
