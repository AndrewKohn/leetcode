/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // j will be the smallest number
    // k will be the next smallest, but greater than j
    // if j < k < nums[i], then triplet was found
    let j = Number.MAX_VALUE,
        k = Number.MAX_VALUE;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= j) {
            j = nums[i]; // Update j if we found a smaller point
        } else if (nums[i] <= k) {
            k = nums[i]; // Update k if we found a candidate for our "middle" point
        } else {
            // if we found a j < k and it reaches this case,
            // we have found an increasing triplet
            return true;
        }
    }

    return false; // if our loop ends, then no triplet was found
};

//  TODO : Add to Array/String notes
