"use strict";
class TreeNode {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function tree2str(root) {
    if (root === null)
        return '';
    return `${root.val}${root.left ? '(' + tree2str(root.left) + ')' : root.right ? '()' : ''}${root.right ? '(' + tree2str(root.right) + ')' : ''}`;
}
