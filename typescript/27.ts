// 27. Remove Element

// INFO:
// Submitted: 09/01/2024
// Runtime: 58ms, beats 58.99%
// Memory: 51.65mb, beats 29.93%

/* FUNCTION */

function removeElement(nums: number[], val: number): number {
    let index = 0;
    for (const num of nums) {
        if (num !== val) nums[index++] = num;
    }

    return index;
}

/* INPUT */

const a1 = [3, 2, 2, 3],
    a2 = 3;
const b1 = [0, 1, 2, 2, 3, 0, 4, 2],
    b2 = 2;

/* OUTPUT */

console.log(removeElement(a1, a2));
console.log("2, nums = [2,2,_,_]");
console.log(removeElement(b1, b2));
console.log("5, nums = [0,1,4,0,3,_,_,_]");

export { }; // HACK : removes error diag about redeclaring block-scope vars
