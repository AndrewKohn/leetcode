// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/

// Input
const strs1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const strs2 = [''];
const strs3 = ['a'];

// Function
function groupAnagrams(strs: string[]): string[][] {
  const output: string[][] = [];

  for (let current = 0; current < strs.length; current++) {
    const result: string[] = [];
    const currentStr = strs[current].split('').sort().join('');
    if (result.length === 0) result.push(strs[current]);

    for (let next = 0; next < strs.length; next++) {
      const nextStr = strs[next].split('').sort().join('');
      if (next !== current && nextStr === currentStr) {
        result.push(strs[next]);
      }
    }

    output.push(result.sort());
  }

  return output;
}

// Output
console.log(groupAnagrams(strs1));
console.log(groupAnagrams(strs2));
console.log(groupAnagrams(strs3));

export {};
