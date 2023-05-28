// 15. 3Sum
// https://leetcode.com/problems/3sum/

// Input
const nums1 = [-1, 0, 1, 2, -1, -4];
const nums2 = [0, 1, 1];
const nums3 = [0, 0, 0, 0];

// Function
function threeSum(nums: number[]) /*: number[][]*/ {
  let output: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0)
          // console.log(i, j, k, `[${nums[i]}, ${nums[j]}, ${nums[k]}]`);

          output.push([nums[i], nums[j], nums[k]]);
      }
    }
  }

  return output;
}

// Output
console.log(threeSum(nums1)); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums2)); // []
console.log(threeSum(nums3)); // [[0, 0, 0]]

export {};
