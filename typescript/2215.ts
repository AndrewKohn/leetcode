// 2215. Find the Difference of Two Arrays

// INFO:
// Submitted: 07/30/24
// Runtime: 80ms, beats 77.50%
// Memory: 56.86mb, beats 64.06%

/* FUNCTION */

function findDifference(nums1: number[], nums2: number[]): number[][] {
    const [set1, set2] = [new Set(nums1), new Set(nums2)];
    const answer = [
        [...set1].filter((num: number) => !set2.delete(num)),
        [...set2],
    ];

    return answer;
}

/* INPUT */

const a1 = [1, 2, 3];
const a2 = [2, 4, 6];
const a3 = [
    [1, 3],
    [4, 6],
];
const b1 = [1, 2, 3, 3];
const b2 = [1, 1, 2, 2];
const b3 = [[3], []];

/* OUTPUT */

console.log(findDifference(a1, a2));
console.log(a3);
console.log(findDifference(b1, b2));
console.log(b3);

export { }; // HACK : removes error diag about redeclaring block-scope vars
