/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  //let print = "";
  let i = 0;
  switch (shape) {
    case "Square": {
      //let i = 0;
      while (i < height) {
        let print = "";
        for (j = 0; j < height; j++) {
          print = print + character;
          //console.log(print);
        }
        console.log(print);
        i++;
      }
      break;
    }
    case "Triangle": {
      //let i = 0;
      //while (i < height) {
      let print = "";
      for (j = 0; j < height; j++) {
        print = print + character;
        console.log(print);
      }
      //console.log();
      i++;
      //}
      break;
    }
    //Diamond doesn't work
    case "Diamond": {
      let print = "";
      let midpoint = (height - 1) / 2;
      let start = midpoint;
      let end = midpoint;

      while (i < height) {
        //left side
        for (j = 0; j < start; j++) {
          print = print + " ";
        }
        //print characters
        for (let temp = start; temp <= end; temp++) {
          print = print + character;
        }
        //right side
        for (j = midpoint + 1; j < height; j++) {
          print = print + " ";
        }
        i++;
        start--;
        end++;
      }
      break;
    }
    default:
      console.log("Not a shape");

      break;
  }
}

printShape("Square", 3, "%");
printShape("Triangle", 3, "$");
//printShape("Diamond", 5, "*");
//wrap switch code in brackets
