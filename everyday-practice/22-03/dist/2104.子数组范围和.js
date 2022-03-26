"use strict";
function subArrayRanges(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; ++i) {
        let max = nums[i];
        let min = nums[i];
        for (let j = i + 1; j < nums.length; ++j) {
            min = Math.min(min, nums[j]);
            max = Math.max(max, nums[j]);
            total += max - min;
        }
    }
    return total;
}
