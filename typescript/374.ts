// 374. Guess Number Higher or Lower

// INFO:
// Submitted: 08/01/2024
// Runtime: 55ms, beats 53.46%
// Memory: 49.97%, beats 57.58%

/* FUNCTION */

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
    let start = 1;
    let end = n;

    while (start <= end) {
        let pick = Math.floor((start + end) / 2);

        switch (guess(pick)) {
            case -1:
                end = pick - 1;
                break;
            case 0:
                return pick;
            case 1:
                start = pick + 1;
                break;
            default:
                break;
        }
    }

    return -999;
}

/* INPUT */

const a1 = 10,
    a2 = 6;
const b1 = 1,
    b2 = 1;
const c1 = 2,
    c2 = 1;

/* OUTPUT */

console.log(guessNumber(a1));
console.log(a2);
console.log(guessNumber(b1));
console.log(b2);
console.log(guessNumber(c1));
console.log(c2);

export { }; // HACK : removes error diag about redeclaring block-scope vars
