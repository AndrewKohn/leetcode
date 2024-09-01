// 28. Find the Index of the First Occurrence in a String

// INFO:
// Submitted: 09/01/2024
// Runtime: 51ms, beats 83.91%
// Memory: 51.08mb, beats 46.57%

/* FUNCTION */

function strStr(haystack: string, needle: string): number {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) return i;
    }

    return -1;
}

/* INPUT */

const a1 = "sadbutsad",
    a2 = "sad";
const b1 = "leetcode",
    b2 = "leeto";

/* OUTPUT */

console.log(strStr(a1, a2));
console.log(0);
console.log(strStr(b1, b2));
console.log(-1);

export { }; // HACK : removes error diag about redeclaring block-scope vars
