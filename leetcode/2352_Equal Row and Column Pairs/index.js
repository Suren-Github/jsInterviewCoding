/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {

  const mergedArr = [].concat(...grid);
  const gridLength = grid[0].length;
  const cols = mergedArr.reduce((groups, number, index) => {
      const groupIndex = index % gridLength;
      groups[groupIndex] = (groups[groupIndex] || []).concat(number);
      return groups;
  }, []);

  const rowsNCols = [...grid, ...cols];
  
   const map = new Map();
  rowsNCols.forEach(item => {
    const itemStr = item.join(",");
    if(!map.has(itemStr)) {
      map.set(itemStr, 0);
    } else {
      const value = map.get(itemStr);
      map.set(itemStr, value + 1);
    }
  });
  
  
  
  const allValues = [...map.values()];
console.log("map: ", map, allValues);
  const result = allValues.reduce((acc, curr) => {
      return acc = acc + curr;
  }, 0);


  console.log(result);
  return result;
}


/* equalPairs([[3,2,1],[1,7,6],[2,7,7]]); */
equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]);
equalPairs([[11, 1], [1, 11]]);
equalPairs([[13,13],[13,13]]);