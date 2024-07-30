// 443. String Compression

// INFO:
// Submitted: 7/30/24
// Runtime: 62ms, beats 82.54%
// Memory: 52.62mb, beats 75.45%

// TODO: read more into string compressions
//  - good exercise for in-place array manipulations

/* FUNCTION */

function compress2(chars: string[]): number {
    let len = 0,
        i = 0;

    while (i < chars.length) {
        let char = chars[i];
        let count = 0;
        chars[len++] = char;

        while (i < chars.length && char === chars[i]) {
            i++;
            count++;
        }

        if (count > 1) {
            for (const digit of count.toString()) chars[len++] = digit;
        }
    }

    return len;
}

/* INPUT */

const a1 = ["a", "a", "b", "b", "c", "c", "c"];
const a2 = 6;
const b1 = ["a"];
const b2 = 1;
const c1 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
const c2 = 4;

/* OUTPUT */

console.log(compress2(a1));
console.log(a2);
console.log(compress2(b1));
console.log(b2);
console.log(compress2(c1));
console.log(c2);

export { }; // HACK : removes error diag about redeclaring block-scope vars
