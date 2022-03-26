"use strict";
function permute(arr) {
    const res = [];
    const len = arr.length;
    const path = [];
    const used = Array(len).fill(false);
    dfs(arr, res, 0, len, path, used);
    function dfs(arr, res, depth, len, path, used) {
        if (depth === len) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < len; i++) {
            if (!used[i]) {
                path.push(arr[i]);
                used[i] = true;
                console.log('before dfs:', path);
                dfs(arr, res, depth + 1, len, path, used);
                console.log('after dfs:', path);
                used[i] = false;
                path.pop();
            }
        }
    }
    return res;
}
console.log(permute([1, 2, 3, 4]));
