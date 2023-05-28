// 704. Binary Search
// https://leetcode.com/problems/binary-search/

// Input
const nums1 = [-1, 0, 3, 5, 9, 12];
const target1 = 9;
const nums2 = [-1, 0, 3, 5, 9, 12];
const target2 = 2;

// Function
// 5/28/23 - Accepted
// Runtime 71 ms Beats 38.32%
// Memory 46.5 MB Beats 17.79%
function search(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }

  return -1;
}

// Output
console.log(search(nums1, target1));
console.log(search(nums2, target2));

export {};
