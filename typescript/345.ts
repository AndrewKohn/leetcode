// 345. Reverse Vowels of a String

// INFO:
// Submitted: 07/29/24
// Runtime: 68ms, beats 79.12%
// Memory: 55.78%, beats 75.41%

/* FUNCTION */

function reverseVowels(s: string): string {
    let a = 0;
    let b = s.length - 1;
    const arr = [...s];
    const VOWELS = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

    while (a < b) {
        if (!VOWELS.has(arr[a])) a++;
        if (!VOWELS.has(arr[b])) b--;
        if (VOWELS.has(arr[a]) && VOWELS.has(arr[b])) {
            const temp = arr[a];
            arr[a++] = arr[b];
            arr[b--] = temp;
        }
    }

    return arr.join("");
}

/* INPUT */

const a1 = "hello";
const a2 = "holle";
const b1 = "leetcode";
const b2 = "leotcede";

/* OUTPUT */

console.log(reverseVowels(a1));
console.log(a2);
console.log(reverseVowels(b1));
console.log(b2);

export { }; // HACK : removes error diag about redeclaring block-scope vars
