// 1071. Greatest Common Divisor of Strings

// INFO:
// Submitted: 07/28/24
// Runtime: 41ms, beats 99.45%
// Memory: 51.74mb, beats 53.16%

/* FUNCTION */

function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return "";

    function gcd(a: number, b: number): number {
        if (b === 0) return a;

        return gcd(b, a % b);
    }

    const gcdLen = gcd(str1.length, str2.length);
    const answer = str1.substring(0, gcdLen);

    return answer;
}

/* INPUT */

const a1 = "ABCABC";
const a2 = "ABC";
const b1 = "ABABAB";
const b2 = "ABAB";
const c1 = "LEET";
const c2 = "CODE";

/* OUTPUT */

console.log(gcdOfStrings(a1, a2));
console.log("ABC");
console.log(gcdOfStrings(b1, b2));
console.log("AB");
console.log(gcdOfStrings(c1, c2));
console.log("");

export { }; // HACK : removes error diag about redeclaring block-scope vars
