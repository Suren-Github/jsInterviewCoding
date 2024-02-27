const arr = [3, 1, 4, 6, 8, 3, 2];

// Approach 1
const minVal = arr.sort((a, b) => a - b);
console.log(minVal[0]);

// Approach 2
let minVal2 = arr[0], i = 0;
while (i < arr.length){
   minVal2 = Math.min(minVal2, arr[i]);
    i++;
}
console.log(minVal2);

// Approach 3
let minVal3 = arr[0], j = 0;
while (j < arr.length){
    if(arr[j] < minVal2){
        minVal2 = arr[j];
    }
    j++;
}
console.log(minVal2);
