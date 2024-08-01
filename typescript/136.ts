// 136. Single Number

// INFO:
// Submitted: 08/01/2024
// Runtime: 65ms, beats 58.05%
// Memory: 52.12mb, beats 91.95%

/* FUNCTION */

function singleNumber(nums: number[]): number {
    let n = 0;
    for (const num of nums) n ^= num;

    return n;
}

/* INPUT */

const a1 = [2, 2, 1];
const a2 = 1;
const b1 = [4, 1, 2, 1, 2];
const b2 = 4;

/* OUTPUT */

console.log(singleNumber(a1));
console.log(a2);
console.log(singleNumber(b1));
console.log(b2);

export { }; // HACK : removes error diag about redeclaring block-scope vars
