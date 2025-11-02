/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let answer = [];
    const max = Math.max(...candies);

    for (let i = 0; i < candies.length; i++) {
        candies[i] + extraCandies >= max ? answer.push(true) : answer.push(false);
    }

    return answer;
};
