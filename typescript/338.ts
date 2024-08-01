// 338. Counting Bits

// INFO:
// Submitted: 08/01/2024
// Runtime: 64ms, beats 96.47%
// Memory: 56.52mb, beats 89.40%

/* FUNCTION */

function countBits(n: number): number[] {
    const answer: number[] = new Array(n + 1).fill(0);

    for (let i = 0; i <= n; i++) {
        answer[i] = answer[i >> 1] + (i & 1);
    }

    return answer;
}

/* INPUT */

const a1 = 2;
const a2 = [0, 1, 1];
const b1 = 5;
const b2 = [0, 1, 1, 2, 1, 2];

/* OUTPUT */

console.log(countBits(a1));
console.log(a2);
console.log(countBits(b1));
console.log(b2);

export { }; // HCK : removes error diag about redeclaring block-scope vars
