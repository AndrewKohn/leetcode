// 724. Find Pivot Index

// INFO:
// Submitted: 07/30/24
// Runtime: 70ms, beats 65.96%
// Memory: 52.62mb, beats 54.21%

/* FUNCTION */

// NOTE: First attempt, 574ms, beats 7.90%!
function pivotIndex(nums: number[]): number {
    let pivot = 0;

    while (pivot < nums.length) {
        let left = 0;
        let right = 0;

        // Check left
        for (let i = pivot - 1; i >= 0; i--) left += nums[i];

        // Check right
        for (let i = pivot + 1; i < nums.length; i++) right += nums[i];

        if (left === right) return pivot;
        if (left === 0 && right === 0) return 0;

        pivot++;
    }

    return -1;
}

// NOTE: Attempt #2: 70ms, beats 65.96%
function pivotIndex2(nums: number[]): number {
    let left = 0,
        total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        left += nums[i];

        if (total - left === left - nums[i]) return i;
    }

    return -1;
}

/* INPUT */

const a1 = [1, 7, 3, 6, 5, 6];
const a2 = 3;
const b1 = [1, 2, 3];
const b2 = -1;
const c1 = [2, 1, -1];
const c2 = 0;

/* OUTPUT */

console.log(pivotIndex2(a1));
console.log(a2);
console.log(pivotIndex2(b1));
console.log(b2);
console.log(pivotIndex2(c1));
console.log(c2);

export { }; // HACK : removes error diag about redeclaring block-scope vars
