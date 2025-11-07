/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s) return true;
    if (!t) return false;

    let i = 0;

    for (const char of t) {
        if (char === s[i]) i++;
        if (i === s.length) return true;
    }

    return false;
};
