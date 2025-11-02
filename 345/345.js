/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowelsRegex = /[aeiouAEIOU]/g;
    if (!s.match(vowelsRegex)) return s;
    const vowels = s.match(vowelsRegex);

    return s.replace(vowelsRegex, () => vowels.pop());
};

console.log(reverseVowels("IcecreAm"));
