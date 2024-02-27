const arr = [3, 2, 4, 7, 10, 6, 5];

/* const reversedArray1 = arr.reverse(); */
/* console.log(reversedArray1); */

const reversedArray2 = [];

let i = arr.length-1;


while(i >=0) {
	reversedArray2.push(arr[i]);
	i--;
}

/* console.log(reversedArray2); */

function reverseTheArray(ar, start, end){
  while(start < end) {
    let temp = ar[start];
    arr[start] = arr[end];
    arr[end] = temp;
		
    start++;
    end--;
  }
  console.log(ar);
}

reverseTheArray(arr, 0, arr.length - 1);