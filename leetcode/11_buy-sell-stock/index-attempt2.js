const maxProfit = (prices) => {
    const minVal = Math.min(...prices);
    const minIndex = prices.findIndex((currVal) => currVal === minVal);

    const maxVal = Math.max(...prices);
    const maxIndex = prices.findIndex((currVal) => currVal === maxVal);
    debugger
    if (maxIndex > minIndex) {
        return maxVal - minVal;
    } else if (maxIndex === minIndex) {
        return 0;
    } else if (maxIndex < minIndex) {
        prices.splice(maxIndex, 1);
        maxProfit(prices);
    } else if (minIndex === prices.length - 1) {
        prices.splice(minIndex, 1);
        maxProfit(prices);
    } 
}

maxProfit([4, 1, 2]);

maxProfit([2, 4, 1]);



// algm2
// 1. Get MinIndex
// 2. Get MaxIndex
// 3. If MaxIndex < MinIndex, remove MaxValue from the array and call the method again with the updated array as param
// 4. Else if MaxIndex > MinIndex, if minIndex === lengthOfArr - 1 ? return 0 : return MaxIndex - MinIndex;