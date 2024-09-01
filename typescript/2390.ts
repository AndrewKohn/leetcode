// 2390. Removing Stars From a String

// INFO:
// Submitted: 08/03/24
// Runtime: 79ms, beats 91.76%
// Memory: 64.60mb, beats 32.16%

/* FUNCTION */

function removeStars(s: string): string {
    let arr: string[] = [];

    for (let i = 0; i < s.length; i++) s[i] === "*" ? arr.pop() : arr.push(s[i]);

    return arr.join("");
}

/* INPUT */

const a1 = "leet**cod*e",
    a2 = "lecoe";
const b1 = "erase*****",
    b2 = "";

/* OUTPUT */

console.log(removeStars(a1));
console.log(a2);
console.log(removeStars(b1));
console.log(b2);

export { }; // HACK : removes error diag about redeclaring block-scope vars
