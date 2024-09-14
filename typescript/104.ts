// 104. Maximum Depth of Binary Tree

// INFO:
// Submitted: 09/14/2024
// Runtime: 63ms, Beats 65.30%
// Memory: 53.45ms, Beats 86.96%

/* FUNCTION */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    const leftMax = maxDepth(root.left);
    const rightMax = maxDepth(root.right);
    const max = Math.max(leftMax, rightMax) + 1;

    return max;
}

/* INPUT */

const a1: TreeNode = [3, 9, 20, null, null, 15, 7];
const b1: TreeNode = [1, null, 2];

/* OUTPUT */

console.log(maxDepth(a1));
console.log(3);
console.log(maxDepth(b1));
console.log(2);

export { }; // HACK : removes error diag about redeclaring block-scope vars
