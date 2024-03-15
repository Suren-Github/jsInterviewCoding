// try the same

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    const rows = grid.map(item => item.join());
    const cols = grid[0].map((col, i) => grid.map(item => item[i]).join());

    let count = 0;
    for(let i of rows) {
        for(let j of cols) {
            if(i === j) {
                count++;
            }
        }
    }

    return count;
}


/* equalPairs([[3,2,1],[1,7,6],[2,7,7]]); */
equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]);
equalPairs([[11, 1], [1, 11]]);
equalPairs([[13, 13], [13, 13]]);