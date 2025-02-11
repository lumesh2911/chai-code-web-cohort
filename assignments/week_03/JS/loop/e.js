// Write a program to calculate the factorial of a number using a for loop.
function factorialNumber(n) {
  let sum = 1;
  for (i = 1; i <= n; i++) {
    sum = sum * i;
  }
  console.log("Factorial is : ", sum);
}
factorialNumber(5);
