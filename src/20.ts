// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

/*
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
*/

// Input
const s1 = '()';
const s2 = '()[]{}';
const s3 = '(]';

// Function
function isValid(s: string) /* : boolean */ {
  const str = s.split('');
}

// Output
console.log(isValid(s1)); // true
console.log(isValid(s2)); // true
console.log(isValid(s3)); // false

export {};
