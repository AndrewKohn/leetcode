// 283. Move Zeroes

// INFO:
// Submitted: 07/30/24
// Runtime: 76ms, beats 78.51%
// Memory: 55.52mb, beats 25.77%

/* FUNCTION */

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let index = 0;

    // move all non-zeroes left
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index++] = nums[i];
        }
    }

    // replaces right side with zeroes
    for (let i = index; i < nums.length; i++) {
        nums[index++] = 0;
    }
}

/* INPUT */

const a1 = [0, 1, 0, 3, 12];
const a2 = [1, 3, 12, 0, 0];
const b1 = [0];
const b2 = [0];

/* OUTPUT */

console.log(moveZeroes(a1));
console.log(a2);
console.log(moveZeroes(b1));
console.log(b2);

export { }; // HACK : removes error diag about redeclaring block-scope vars
