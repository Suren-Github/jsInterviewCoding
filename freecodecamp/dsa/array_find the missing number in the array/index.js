// const arr = [2, 4, 1, 8, 6, 3, 7];
// // Given an array of n-1 distinct numbers in the range 1 to n. Find the missing number in it.
// // Approach 1 - failed:
// const solution = (arr) => {
//   arr = arr.sort((a, b) => a - b);
//   for(let i=arr[0]; i<=arr.length; i++) {
//     if(arr[i] !== i) {
//       return i;
//     }
//   }
// }

// console.log(solution(arr));



const arr = [2, 4, 1, 8, 6, 3, 7];
// Given an array of n-1 distinct numbers in the range 1 to n. Find the missing number in it.
// Approach 2
const solution = (arr) => {
  // Using the mathematical formula approach:
  const n = Math.max(...arr);

  let sumOfN = (n * (n + 1)) / 2;

  let manualSum = 0;

  for (let i = 0; i < arr.length; i++) {
    manualSum += arr[i];
  }

  return Math.abs(sumOfN - manualSum);
}

console.log(solution(arr));



// More efficient approach

const solution2 = (arr) => {
  // Using the mathematical formula approach:
  const n = Math.max(...arr);

  let sumOfN = (n * (n + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    sumOfN = sumOfN - arr[i];
  }

  return sumOfN;
}

console.log(solution2(arr));
