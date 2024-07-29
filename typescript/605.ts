// 605. Can Place Flowers

// INFO:
// Submitted: 07/29/24
// Runtime: 61ms, beats 70.34%
// Memory: 52.17mb, beats 49.69%

/* FUNCTION */

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let i = 0;
    let arr = flowerbed;
    let flowers = n;

    if (arr.length === 1 && arr[0] === 0) return true;

    while (i < arr.length) {
        const prev = arr[i - 1];
        const curr = arr[i];
        const next = arr[i + 1];

        if (i !== 0 && i < arr.length - 1) {
            if (!prev && !curr && !next) {
                arr[i] = 1;
                flowers--;
            }
        }

        if (i === 0 && !curr && !next) {
            arr[i] = 1;
            flowers--;
        }

        if (i === arr.length - 1 && !curr && !prev) {
            arr[i] = 1;
            flowers--;
        }

        i++;
    }

    return flowers <= 0 ? true : false;
}

/* INPUT */

const a1 = [1, 0, 0, 0, 1];
const a2 = 1;
const b1 = [1, 0, 0, 0, 1];
const b2 = 2;

/* OUTPUT */

console.log(canPlaceFlowers(a1, a2));
console.log(true);
console.log(canPlaceFlowers(b1, b2));
console.log(false);

export { }; // HACK : removes error diag about redeclaring block-scope vars
