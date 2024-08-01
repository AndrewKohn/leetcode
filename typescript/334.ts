// 334. Increasing Triplet Subsequence

// INFO:
// Submitted: 07/29/24
// Runtime: 80ms, beats 63.67%
// Memory: 69.36mb, beats 90.14%

/* FUNCTION */

function increasingTriplet(nums: number[]): boolean {
    let a = Infinity,
        b = Infinity;

    for (const c of nums) {
        if (c <= a) a = c;
        else if (c <= b) b = c;

        if (a < b && b < c) return true;
    }

    return false;
}

/* INPUT */

const a1 = [1, 2, 3, 4, 5];
const a2 = true;
const b1 = [5, 4, 3, 2, 1];
const b2 = false;
const c1 = [2, 1, 5, 0, 4, 6];
const c2 = true;

/* OUTPUT */

console.log(increasingTriplet(a1));
console.log(a2);
console.log(increasingTriplet(b1));
console.log(b2);
console.log(increasingTriplet(c1));
console.log(c2);

export { }; // HACK : removes error diag about redeclaring block-scope vars
