// 1. Two Sum

// INFO:
// Submitted: 07/28/24
// Runtime: 157ms, beats 12.99%
// Memory: 52.32mb, 53.75%

/* FUNCTION */

function twoSum(nums: number[], target: number): number[] {
    let a = 0;
    let b = 1;

    while (nums[a] + nums[b] !== target) {
        if (b === nums.length) {
            a++;
            b = a;
        }
        b++;
    }

    return [a, b];
}

/* INPUT */

const a1 = [2, 7, 11, 15];
const a2 = 9;
const b1 = [3, 2, 4];
const b2 = 6;
const c1 = [3, 3];
const c2 = 6;

/* OUTPUT */

console.log(twoSum(a1, a2));
console.log("[0, 1]");
console.log(twoSum(b1, b2));
console.log("[1, 2]");
console.log(twoSum(c1, c2));
console.log("[0, 1]");

export { }; // HACK : removes error diag about redeclaring block-scope vars
