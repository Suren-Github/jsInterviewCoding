/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const m1 = new Map();
    const m2 = new Map();

    const res1 = [];
    const res2 = [];
    nums1.forEach(item => m1.set(item, 0));
    nums2.forEach(item => m2.set(item, 0));

    for (let item of nums1) {
        if (!m2.has(item)) {
            res1.push(item);
        }
    }

    for (let item of nums2) {
        if (!m1.has(item)) {
            res2.push(item);
        }
    }

		console.log(res1, res2);
    return [[...new Set(res1)], [...new Set(res2)]];

};

/* console.log(findDifference([1,2,3], [2,4,6])); */
console.log(findDifference([1,2,3,3], [1,1,2,2]));

