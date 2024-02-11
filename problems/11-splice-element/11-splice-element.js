/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  //empty array to add each element to
  let newArr = [];

  //1st half
  for (let i = 0; i < index; i++) {
    newArr.push(someArr[i]);
  }
  //2nd half (skips the index you want to delete)
  for (let i = ++index; i < someArr.length; i++) {
    newArr.push(someArr[i]);
  }

  //print arrays
  console.log(newArr);
}

let inputArr = [1, 2, 3, 4, 5];
let inputArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let inputArr3 = [7, 8, 9, 10];
spliceElement(inputArr, 2);
spliceElement(inputArr2, 5);
spliceElement(inputArr3, 0);
