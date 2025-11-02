/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    function gcd(a, b) {
        if (b === 0) return a;

        return gcd(b, a % b);
    }

    const gcdLen = gcd(str1.length, str2.length);
    const answer = str1.substring(0, gcdLen);

    return answer;
};
