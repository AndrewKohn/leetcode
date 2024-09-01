// 1456. Maximum Number of Vowels in a Substring of Given Length

// INFO:
// Submitted: 08/03/24
// Runtime: 94ms, beats 21.65%
// Memory: 58.05mb, beats 14.85%

/* FUNCTION */

function maxVowels(s: string, k: number): number {
    const VOWELS = new Set(["a", "e", "i", "o", "u"]);
    let count = 0,
        answer = 0;

    for (let i = 0; i < s.length; i++) {
        if (i < k) {
            if (VOWELS.has(s[i].toLowerCase())) count++;
        } else {
            if (VOWELS.has(s[i - k].toLowerCase())) count--;
            if (VOWELS.has(s[i].toLowerCase())) count++;
        }

        answer = Math.max(answer, count);
    }

    return answer;
}

/* INPUT */

const a1 = "abciiidef",
    a2 = 3;
const b1 = "aeiou",
    b2 = 2;
const c1 = "leetcode",
    c2 = 3;

/* OUTPUT */

console.log(maxVowels(a1, a2));
console.log(3);
console.log(maxVowels(b1, b2));
console.log(2);
console.log(maxVowels(c1, c2));
console.log(2);

export { }; // H%ACK : removes error diag about redeclaring block-scope vars
