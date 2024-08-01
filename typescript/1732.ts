// 1732. Find the Highest Altitude

// INFO:
// Submitted: 07/30/24
// Runtime: 56ms, beats 65.37%
// Memory: 49.79mb, beats 98.38%

/* FUNCTION */

function largestAltitude(gain: number[]): number {
    let max = 0,
        temp = 0,
        i = 0;

    while (i < gain.length) {
        temp += gain[i];

        if (max < temp) max = temp;

        i++;
    }

    return max;
}

/* INPUT */

const a1 = [-5, 1, 5, 0, -7];
const a2 = 1;
const b1 = [-4, -3, -2, -1, 4, 3, 2];
const b2 = 0;

/* OUTPUT */

console.log(largestAltitude(a1));
console.log(a2);
console.log(largestAltitude(b1));
console.log(b2);

export { }; // HACK : removes error diag about redeclaring block-scope vars
