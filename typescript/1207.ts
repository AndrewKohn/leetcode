// 1207. Unique Number of Occurrences

// INFO:
// Submitted: 07/30/24
// Runtime: 52ms, beats 88.27%
// Memory: 51.54mb, beats 81.78%

/* FUNCTION */

function uniqueOccurrences(arr: number[]): boolean {
    const nums = arr.sort((a, b) => a - b);
    let counter: number[] = [];
    let i = 0;

    while (i < nums.length) {
        let count = 0;
        let num = nums[i];

        while (i < nums.length && nums[i] === num) {
            count++;
            i++;
        }

        if (counter.includes(count)) return false;
        counter.push(count);
    }

    return true;
}

/* INPUT */

const a1 = [1, 2, 2, 1, 1, 3];
const b1 = [1, 2];
const c1 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];

/* OUTPUT */

console.log(uniqueOccurrences(a1));
console.log(true);
console.log(uniqueOccurrences(b1));
console.log(false);
console.log(uniqueOccurrences(c1));
console.log(true);

export { }; // HACK : removes error diag about redeclaring block-scope vars
