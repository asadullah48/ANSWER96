// Q 96
// This function calculates the sum of all numbers in an array
function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
  }
  
  // Example: Calculating the sum of an array of numbers
  const numbers: number[] = [1, 2, 3, 4, 5];
  console.log(calculateSum(numbers)); // Outputs: 15
  // It adds up all the numbers in the array, resulting in a single sum value.