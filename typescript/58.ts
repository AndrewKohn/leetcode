// 58. Length of Last Word

// INFO:
// Submitted: 09/01/2024
// Runtime: 53ms, Beats 76.25%
// Memory: 51.59MB, Beats 25.16%

/* FUNCTION */

function lengthOfLastWord(s: string): number {
    const regex = /[\s]+/;
    const arr = s.trim().split(regex).join(" ").split(" ");

    return arr[arr.length - 1].length;
}

/* INPUT */

const a1 = "Hello World";
const b1 = "   fly me   to   the moon  ";
const c1 = "luffy is still joyboy";

/* OUTPUT */

console.log(lengthOfLastWord(a1));
console.log(5);
console.log(lengthOfLastWord(b1));
console.log(4);
console.log(lengthOfLastWord(c1));
console.log(6);

export { }; // HACK : removes error diag about redeclaring block-scope vars
