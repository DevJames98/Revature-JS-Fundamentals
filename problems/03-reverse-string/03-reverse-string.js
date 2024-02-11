/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  //empty string to store the reversed string
  let reverse = "";
  let lastIndex = someStr.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    reverse = reverse + someStr[i];
  }
  console.log(reverse);
}

reverseStr("hello");
