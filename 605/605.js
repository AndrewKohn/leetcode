/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (!n) {
        return true;
    }

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i + 1]) {
            i += 2;
            continue;
        }

        if (!flowerbed[i] && !flowerbed[i - 1]) {
            n--;

            if (!n) {
                return true;
            }
            i++;
        }
    }
    return false;
};
