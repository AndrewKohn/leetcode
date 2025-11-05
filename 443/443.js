/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if (chars.length === 0) return 0;

    let read = 0,
        write = 0;

    while (read < chars.length) {
        let char = chars[read];
        let n = 0;

        while (read < chars.length && chars[read] === char) {
            read++;
            n++; // collect count as long as char is the same
        }

        chars[write++] = char; // write current char
        if (n > 1) {
            for (const s of String(n)) {
                chars[write++] = s; // appends digits
            }
        }
    }

    chars.length = write;

    // console.log(chars, write);

    return write;
};

// compress(["a", "a", "b", "b", "c", "c", "c"]);
