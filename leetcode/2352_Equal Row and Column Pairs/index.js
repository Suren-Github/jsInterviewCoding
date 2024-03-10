/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
	debugger;
  
  
  const map = new Map();
  grid.forEach(item => map.set(item.join(""), 0));
 
  const mergedArr = [].concat(...grid);
  const cols = mergedArr.reduce((groups, number, index) => {
      const groupIndex = index % 3;
      groups[groupIndex] = (groups[groupIndex] || []).concat(number);
      return groups;
  }, []);

  const rowsNCols = [...grid, ...cols];
  console.log(rowsNCols, map);
  
  grid.forEach(item => {
    const key = item.join("");
    if(map.has(key)) {
      const valToUpdate = map.get(key);
      map.set(key, valToUpdate + 1);
    }
  });
  
  console.log(map.forEach((item, key)=> console.log(item, key)));
  
 



}



equalPairs([[3,2,1],[1,7,6],[2,7,7]]);