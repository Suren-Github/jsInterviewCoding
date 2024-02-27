const arr = [0, 1, 0, 4, 12];

// Approach 1
const solution = (arr) => {
 let zeroes = [], i = 0;

 if(arr.length < 1) {
  console.log("Array length is null");
  return false;
}

 while(i< arr.length){
  if(arr[i] === 0){
    zeroes.push(0);
    arr.splice(i, 1);
  }
  i++;
 }

 return arr.concat(zeroes);
}

console.log(solution(arr));

