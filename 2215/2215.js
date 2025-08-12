/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const [set1, set2] = [new Set(nums1), new Set(nums2)];
    const ans = [null, null];

    ans[0] = [...set1].filter((num) => !set2.has(num));
    ans[1] = [...set2].filter((num) => !set1.has(num));

    return ans;
};
