/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  //last element in array
  let last = numArray.length - 1;
  //var to store variables temporarily when switching
  let temp;

  //bubble sort
  for (let i = last; i >= 0; i--) {
    for (j = 0; j <= last; j++) {
      if (numArray[j] > numArray[j + 1]) {
        temp = numArray[j];
        numArray[j] = numArray[j + 1];
        numArray[j + 1] = temp;
      }
    }
  }
  console.log(numArray);
}

let arr = [5, 2, 7, 3, 9, 6, 0];
bubbleSort(arr);
