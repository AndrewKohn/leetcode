// 1768. Merge Strings Alternately

// INFO:
// Submitted: 07/28/24
// Runtime: 53ms, beats 84.23%
// Memory: 51.96mb, beats 56.77%

/* FUNCTION */

function mergeAlternately(word1: string, word2: string): string {
    let answer = "";

    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        i < word1.length ? (answer += word1[i]) : "";
        i < word2.length ? (answer += word2[i]) : "";
    }

    return answer;
}

/* INPUT */

const a1 = "abc";
const a2 = "pqr";
const b1 = "ab";
const b2 = "pqrs";
const c1 = "abcd";
const c2 = "pq";

/* OUTPUT */

console.log(mergeAlternately(a1, a2));
console.log("apbqcr\n");
console.log(mergeAlternately(b1, b2));
console.log("apbqrs\n");
console.log(mergeAlternately(c1, c2));
console.log("apbqcd\n");

export { }; // HACK : removes error diag about redeclaring block-scope vars
