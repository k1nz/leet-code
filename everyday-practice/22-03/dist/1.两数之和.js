"use strict";
function twoSum(nums, target) {
    const { length } = nums;
    const map = new Map();
    for (let i = 0; i < length; i++) {
        const curr = nums[i];
        const x = target - curr;
        if (map.has(x))
            return [i, map.get(x)];
        map.set(curr, i);
    }
    return [];
}
