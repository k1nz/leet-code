"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    k = k % nums.length;
    const endArr = nums.splice(nums.length - k, k);
    for (let length = endArr.length - 1, i = length; i >= 0; --i) {
        nums.unshift(endArr[i]);
    }
}
// best solution
function rotateReverse(nums, k) {
    const length = nums.length;
    k = k % length;
    nums.reverse();
    reverse(nums, 0, k - 1);
    reverse(nums, k, length - 1);
}
function reverse(arr, start, end) {
    for (let i = start, j = end; i < j; j--, i++) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
}
