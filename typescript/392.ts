// 392. Is Subsequence

// INFO:
// Submitted: 07/30/24
// Runtime: 53ms, beats 85.70%
// Memory: 50.34, beats 82.65%

/* FUNCTION */

// NOTE: Brute force
// runtime: 65ms, Beats26.63%
// memory: 51.09MB, Beats36.80%
function isSubsequence(s: string, t: string): boolean {
    if (s === t) return true;
    if (s.length > t.length) return false;

    let index = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[index] === t[i]) index++;
        if (index === s.length) return true;
    }

    return false;
}

// NOTE: attempt #2
// Runtime: 53ms, beats 85.70%
// Memory: 50.34, beats 82.65%
function isSubsequence2(s: string, t: string): boolean {
    let n = 0,
        i = 0;

    while (i < t.length) {
        if (t.charAt(i) === s.charAt(n)) n++;

        i++;
    }

    return n === s.length;
}

/* INPUT */

const a1 = "abc";
const a2 = "ahbgdc";
const b1 = "axc";
const b2 = "ahbgdc";
const c1 = "ab";
const c2 = "baab";

/* OUTPUT */

console.log(isSubsequence2(a1, a2));
console.log(true);
console.log(isSubsequence2(b1, b2));
console.log(false);
console.log(isSubsequence2(c1, c2));
console.log(true);

export { }; // HACK : removes error diag about redeclaring block-scope vars
