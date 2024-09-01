// 1460. Make Two Arrays Equal by Reversing Subarrays

// INFO:
// Submitted: 08/03/24
// Runtime: 65ms, beats 48.00%
// Memory: 51.86mb, beats 48.00%

/* FUNCTION */

function canBeEqual(target: number[], arr: number[]): boolean {
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);

    for (let i = 0; i < target.length; i++) {
        if (arr[i] !== target[i]) return false;
    }

    return true;
}

/* INPUT */

const a1 = [1, 2, 3, 4],
    a2 = [2, 4, 1, 3];
const b1 = [392, 360],
    b2 = [392, 360];
const c1 = [3, 7, 9],
    c2 = [3, 7, 11];

/* OUTPUT */

console.log(canBeEqual(a1, a2));
console.log(true);
console.log(canBeEqual(b1, b2));
console.log(true);
console.log(canBeEqual(c1, c2));
console.log(false);

export { }; // HACK : removes error diag about redeclaring block-scope vars
