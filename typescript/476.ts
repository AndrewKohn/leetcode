// 476. Number Complement

// INFO:
// Submitted: 09/14/2024
// Runtime: 64ms, Beats 19.91%
// Memory: 51.18MB, Beats 65.00%

/* FUNCTION */

function findComplement(num: number): number {
    const binary = num.toString(2);
    let complement = "";

    for (const bit of binary) {
        bit === "1" ? (complement += "0") : (complement += "1");
    }

    return parseInt(complement, 2);
}

/* INPUT */

const a1 = 5;
const b1 = 1;

/* OUTPUT */

console.log(findComplement(a1));
console.log(2);
console.log(findComplement(b1));
console.log(0);

export { }; // HACK : removes error diag about redeclaring block-scope vars
