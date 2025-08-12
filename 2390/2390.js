/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const arr = [];

    for (let i = 0; i < s.length; i++) s[i] === "*" ? arr.pop() : arr.push(s[i]);

    return arr.join("");
};
