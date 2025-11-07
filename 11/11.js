/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0,
        r = height.length - 1;
    let res = 0;

    while (l < r) {
        const h = Math.min(height[l], height[r]);
        res = Math.max(res, h * (r - l));

        height[l] < height[r] ? l++ : r--;
    }

    return res;
};
