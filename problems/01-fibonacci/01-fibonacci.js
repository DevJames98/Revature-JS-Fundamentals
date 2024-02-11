/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let n1 = 0;
    let n2 = 1;
    let temp;
    for (let i = 2; i <= n; i++) {
      //temp to store addition
      temp = n1 + n2;
      //makes the first term equal to the second term;
      n1 = n2;
      //makes the second term equal to the newly found term
      n2 = temp;
    }
    return temp;
  }
}
console.log(fib(0));
console.log(fib(1));
console.log(fib(5));
console.log(fib(50));
