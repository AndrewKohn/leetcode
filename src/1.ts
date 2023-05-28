// 1. Two Sum
// https://leetcode.com/problems/two-sum/

// Input
const nums1 = [2, 7, 11, 15],
  target1 = 9;
const nums2 = [3, 2, 4],
  target2 = 6;
const nums3 = [3, 3],
  target3 = 6;

// Function
// 5/26/23 - Accepted
// Runtime 499 ms    Beats 5.1%
// Memory 49.5 MB    Beats 5.8%
function twoSum(nums: number[], target: number): number[] {
  let firstIndex = -1;
  let secondIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (firstIndex === -1 || secondIndex === -1)
      nums.map((num: number, index: number) => {
        if (index !== i && num + nums[i] === target) {
          firstIndex = i;
          secondIndex = index;
        }
      });
  }

  return [firstIndex, secondIndex];
}

// Output
console.log(twoSum(nums1, target1)); // [0,1]
console.log(twoSum(nums2, target2)); // [1,2]
console.log(twoSum(nums3, target3)); // [0,1]

export {};
