// 238. Product of Array Except Self

// INFO:
// Submitted: 07/29/24
// Runtime: 91ms, beats 94.68%
// Memory: 68.08mb, beats 23.49%

/* FUNCTION */

function productExceptSelf(nums: number[]): number[] {
    const len = nums.length;
    const answer = new Array(len);

    // start -> end
    let prod = 1;
    for (let i = 0; i < len; i++) {
        answer[i] = prod;
        prod *= nums[i];
    }

    // end -> start
    prod = 1;
    for (let i = len - 1; i >= 0; i--) {
        answer[i] *= prod;
        if (answer[i] === -0) answer[i] += 0; // removes negative zeroes
        prod *= nums[i];
    }

    return answer;
}

/* INPUT */

const a1 = [1, 2, 3, 4];
const a2 = [24, 12, 8, 6];
const b1 = [-1, 1, 0, -3, 3];
const b2 = [0, 0, 9, 0, 0];

/* OUTPUT */

console.log(productExceptSelf(a1));
console.log(a2);
console.log(productExceptSelf(b1));
console.log(b2);

export { }; // HACK : removes error diag about redeclaring block-scope vars
