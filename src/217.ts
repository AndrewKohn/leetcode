// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

// Input
const nums1: number[] = [1, 2, 3, 1];
const nums2: number[] = [1, 2, 3, 4];
const nums3: number[] = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

// Function
// 5/26/23 - Accepted
// Runtime 105 ms  Beats 35.75%
// Memory 55.4 MB  Beats 41.12%
function containsDuplicate(nums: number[]): boolean {
  const set = new Set(nums);

  return set.size !== nums.length ? true : false;
}

// Output
console.log(containsDuplicate(nums1)); // true
console.log(containsDuplicate(nums2)); // false
console.log(containsDuplicate(nums3)); // true

export {};
