const str = "madam";

// Approach 1:
const reverseTheArray = (inpStr) => {
  return inpStr === inpStr.split("").reverse().join("");
}
console.log(reverseTheArray(str));



// Approach 2:
const str2 = "Nivin";

const reverseTheArray2 = (inpStr) => {

	let left = 0, right = inpStr.length;

	let arr = inpStr.toLowerCase().split("");
  
  while(left < right){
  	let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
    left++;
    right--;
  }
  console.log(inpStr.toLowerCase() == arr.join(""));
  
  return inpStr.toLowerCase() == arr.join("");
}

console.log(reverseTheArray2(str2));



// Approach 3:
const str3 = "Nivin";

const reverseTheArray3 = (inpStr) => {

	let start = 0, end = inpStr.length;

	let arr = inpStr.toLowerCase().split("");
  
  while(start < end){
    if(arr[start] !== arr[end]){
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(reverseTheArray3(str3));