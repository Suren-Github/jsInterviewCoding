// https://leetcode.com/problems/unique-number-of-occurrences/description/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    // let arr = [1, 2, 2, 1, 1, 3, 3];

    const mapArr = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (!mapArr.has(arr[i])) {
            mapArr.set(arr[i], 1);
        } else {
            const newCount = mapArr.get(arr[i]) + 1;
            mapArr.set(arr[i], newCount);
        }
    }

    const uniqVal = new Set(mapArr.values());
    console.log(uniqVal.size);

    return uniqVal.size === mapArr.size;
};
