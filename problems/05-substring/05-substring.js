/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
  //let checkInput = false

  try {
    //checks to see if the input is not a number
    if (isNaN(someStr)) {
      //empty string to store the new string
      let newString = "";
      //loops through the string at the given indices
      for (let i = startIndex; i < endIndex; i++) {
        //adds each letter to the empty string
        newString = newString + someStr[i];
      }
      //print string
      console.log(newString);
    } else {
      throw new Error("Incorrect input");
    }
  } catch (error) {
    console.log(error);
  }
}

substring("hello", 0, 3);
//THIS THROWS THE ERROR
substring(5, 5, 5);
