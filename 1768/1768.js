/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let n = 0;
    let arr = [];

    while (n < word1.split("").length || n < word2.split("").length) {
        if (n < word1.split("").length) arr.push(word1.split("")[n]);
        if (n < word2.split("").length) arr.push(word2.split("")[n]);

        n++;
    }

    return arr.join("");
};
