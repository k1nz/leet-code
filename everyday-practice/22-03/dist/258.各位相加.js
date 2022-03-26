"use strict";
// 递归
function addDigitsRecursion(num) {
    const arr = num.toString().split('');
    if (arr.length === 1)
        return num;
    return addDigitsRecursion(arr.reduce((prev, curr) => prev + parseInt(curr), 0));
}
// 数学
function addDigitsMath(num) {
    return ((num - 1) % 9) + 1;
}
