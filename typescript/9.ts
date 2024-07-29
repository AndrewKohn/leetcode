// 9. Palindrome Number

// INFO : Convert to string
// Submitted: 07/28/24
// Runtime: 125ms, beats 82.95%
// Memory: 59.36ms, beats 35.17%

// INFO : No conversion
// Runtime: 111ms, beats 96.99%
// Memory: 57.71mb, beats 86.31%

/* FUNCTION */

function isPalindrome(x: number): boolean {
    const str = x.toString().split("");
    let i = 0;

    while (i < str.length) {
        if (str[str.length - i - 1] !== str[i]) return false;
        i++;
    }

    return true;
}

// TODO : Without converting into string.

function isPalindrome2(x: number): boolean {
    let reverse = 0;
    let num = x;

    while (num > 0) {
        reverse = reverse * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return reverse === x ? true : false;
}

/* INPUT */

const a = 121;
const b = -121;
const c = 10;

/* OUTPUT */

console.log(isPalindrome2(a));
console.log(true);
console.log(isPalindrome2(b));
console.log(false);
console.log(isPalindrome2(c));
console.log(false);

export { }; // HACK : removes error diag about redeclaring block-scope vars
