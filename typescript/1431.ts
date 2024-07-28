// 1431. Kids With the Greatest Number of Candies

// INFO:
// Submitted: 07/28/24
// Runtime: 64ms, beats 51.17%
// Memory: 52.80mb, beats 32.89%

/* FUNCTION */

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const answer = [];
    const max = Math.max(...candies);
    let i = 0;

    while (i < candies.length) {
        candies[i] + extraCandies >= max ? answer.push(true) : answer.push(false);
        i++;
    }

    return answer;
}

/* INPUT */

const a1 = [2, 3, 5, 1, 3];
const a2 = 3;
const b1 = [4, 2, 1, 1, 2];
const b2 = 1;
const c1 = [12, 1, 12];
const c2 = 10;

/* OUTPUT */

console.log(kidsWithCandies(a1, a2));
console.log([true, true, true, false, true]);
console.log(kidsWithCandies(b1, b2));
console.log([true, false, false, false, false]);
console.log(kidsWithCandies(c1, c2));
console.log([true, false, true]);

export { }; // HACK : removes error diag about redeclaring block-scope vars
