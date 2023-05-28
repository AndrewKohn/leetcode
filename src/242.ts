// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/

// Input
const s1 = 'anagram',
  t1 = 'nagaram';
const s2 = 'rat',
  t2 = 'car';
const s3 = 'rac',
  t3 = 'car';

// Function
// 5/26/23 - Accepted
// Runtime 108 ms   Beats 26.7%
// Memory 48.1 MB   Beats 37.75%
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false; // false if not the same length

  const sArr = s.split('').sort();
  const tArr = t.split('').sort();
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) return false;
  }

  return true; // return true if previous steps don't flag as false
}

// Output
console.log(isAnagram(s1, t1)); // true
console.log(isAnagram(s2, t2)); // false
console.log(isAnagram(s3, t3)); // true

export {};
