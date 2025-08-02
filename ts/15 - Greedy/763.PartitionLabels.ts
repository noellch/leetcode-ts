/* 
https://leetcode.com/problems/partition-labels/description/
*/

/* ------------------------------------------------------------------------------- */

function partitionLabels(s: string): number[] {
    const map: { [letter: string]: number } = {};

    // 記錄每個字母最後出現的 index
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = i;
    }

    const result: number[] = [];

    let size = 0,
        lastIndex = 0;

    for (let i = 0; i < s.length; i++) {
        size++;
        lastIndex = Math.max(lastIndex, map[s[i]]);
        if (i === lastIndex) {
            result.push(size);
            size = 0;
        }
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(26)
*/

/* ------------------------------------------------------------------------------- */

const s = 'ababcbacadefegdehijhklij';
// const s = "eccbbbbdec"

console.log(partitionLabels(s));
