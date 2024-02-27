const arr = [3, 10, 4, 11, 7, 34, 6, 6];

// Approach 1
const solution = (arr) => {
  if(arr.length < 2) {
    console.log("Array length is too small to find the second maximum value");
    return false;
  }
  const minVal = arr.sort((a, b) => b - a);
  console.log(minVal[1]);
}

solution(arr);


// Approach 1
const solution2 = (arr) => {
  if(arr.length < 2) {
    console.log("Array length is too small to find the second maximum value");
    return false;
  }
  
  let i = 0;
  let largest= arr[0], secondLargest = arr[0];
  
  while(i < arr.length){
  	if(arr[i] < largest) {
    	if(arr[i] > secondLargest){
    		secondLargest = arr[i];
      }
    } else if(arr[i] > largest) {
    	secondLargest = largest;
      largest = arr[i];
    }
  	i++;
  }
  
  console.log(secondLargest);
}

solution2(arr);