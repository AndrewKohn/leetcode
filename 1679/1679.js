/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0;
    let l = 0,
        r = nums.length - 1;

    nums.sort((a, b) => a - b);
    while (l < r) {
        const sum = nums[l] + nums[r];

        if (sum === k) {
            count++;
            l++;
            r--;
        } else if (sum < k) {
            l++;
        } else {
            r--;
        }
    }

    return count;
};

// TODO : note for two-pointer / Hashmap
