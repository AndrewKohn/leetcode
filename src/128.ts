// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/

// Input
const nums1 = [100, 4, 200, 1, 3, 2];
const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const nums3 = [1, 2, 0, 1];

// Function
// 5/29/23 - Accepted
// Runtime 125 ms Beats 69.68%
// Memory 51.6 MB Beats 95.4%
function longestConsecutive(nums: number[]): number {
  let num = 1;
  let maxCount = 0;
  const sortedNums = nums.sort((prev: number, next: number) => prev - next);

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] !== sortedNums[i + 1])
      if (sortedNums[i] + 1 === sortedNums[i + 1]) {
        num++;
      } else num = 1;

    if (num > maxCount) maxCount = num;
  }

  return maxCount;
}

// Output
console.log(longestConsecutive(nums1));
console.log(longestConsecutive(nums2));
console.log(longestConsecutive(nums3));

export {};
