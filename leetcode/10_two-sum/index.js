/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i=0;
    while(i+1 < nums.length){
        if(nums[i] + nums[i+1] == target) {
            return [i, i+1];
        }
        i++;
    }
}

twoSum([2, 7, 11, 15], 9);


// https://leetcode.com/problems/two-sum/