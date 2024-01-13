  var maxProfit = function(prices) {
  const minVal = Math.min(...prices);
  const minIndex = prices.findIndex((currVal)=>currVal === minVal);

  
  const gtThanMinIndex = prices.length > minIndex+1 ? prices.slice(minIndex+1, prices.length) : 0;

  if(gtThanMinIndex == 0) {
    console.log(0);
    return 0;
  }
  
  const sortedFutureVal = gtThanMinIndex.sort((a,b)=> a-b);
  
  console.log(sortedFutureVal[sortedFutureVal.length-1] - minVal);
  
  return sortedFutureVal[sortedFutureVal.length-1] - minVal;

}

maxProfit([7,1,6,4,3]);

//algm

// 1. Find min of array - index
// 2. Take all the elements after the minArrayIndex till the end of the array
// 3. sort it in ascending order
// 4. Take the last element
// 5. Subtract it from the minArrayValue
// 6. Hence the solution