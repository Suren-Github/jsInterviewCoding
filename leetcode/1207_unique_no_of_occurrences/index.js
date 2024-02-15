/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let occurrence = {}, l = 0;

    while (l < arr.length) {
        occurrence[arr[l]] = occurrence[arr[l]] ? occurrence[arr[l]] + 1 : 1;        
        l++;
    }
    return new Set([...Object.values(occurrence)]).size == Object.keys(occurrence).length;
};
