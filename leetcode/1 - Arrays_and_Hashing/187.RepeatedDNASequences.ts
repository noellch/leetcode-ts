/* 
https://leetcode.com/problems/repeated-dna-sequences/description/
*/

/* ------------------------------------------------------------------------------- */

function findRepeatedDnaSequences(s: string): string[] {
    const seen: Set<string> = new Set();
    const result: Set<string> = new Set();

    for (let i = 0; i < s.length - 9; i++) {
        const subStr = s.substring(i, i + 10);
        if (seen.has(subStr)) {
            result.add(subStr);
        } else {
            seen.add(subStr);
        }
    }

    return Array.from(result);
}

/*
T.C.: O(N - 10)
S.C.: O(N - 10)
*/

/* ------------------------------------------------------------------------------- */

const s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT';
console.log(findRepeatedDnaSequences(s));
