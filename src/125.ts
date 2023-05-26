// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

// Input
const s1 = 'A man, a plan, a canal: Panama';
const s2 = 'race a car';
const s3 = ' ';

// 5/26/23 - Accepted
// Runtime 89 ms    Beats 21.44%
// Memory 47.1 MB   Beats 48.22%
function isPalindrome(s: string): boolean {
  const str = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const strReversed = str.split('').reverse().join('');

  return str === strReversed;
}

// Output
console.log(isPalindrome(s1)); // true
console.log(isPalindrome(s2)); // false
console.log(isPalindrome(s3)); // true

export {};
