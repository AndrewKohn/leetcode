// 151. Reverse Words in a String

// INFO:
// Submitted: 07/29/24
// Runtime: 51ms, beats 91.30%
// Memory: 52.00mb, beats 26.97%

/* FUNCTION */

function reverseWords(s: string): string {
    const regex = /\s+/;
    const splitStr = s.trim().split(regex);
    const answer = [];
    let i = 0;

    while (i < splitStr.length) {
        answer.push(splitStr[splitStr.length - 1 - i]);

        i++;
    }

    return answer.join(" ");
}

/* INPUT */

const a1 = "the sky is blue";
const a2 = "blue is sky the";
const b1 = "  hello world  ";
const b2 = "world hello";
const c1 = "a good   example";
const c2 = "example good a";

/* OUTPUT */

console.log(reverseWords(a1));
console.log(a2);
console.log(reverseWords(b1));
console.log(b2);
console.log(reverseWords(c1));
console.log(c2);

export { }; // HACK : removes error diag about redeclaring block-scope vars
