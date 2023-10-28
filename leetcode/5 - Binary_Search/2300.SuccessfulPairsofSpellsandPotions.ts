/* 
You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.
*/

/* ------------------------------------------------------------------------------- */

function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b);

    const result: number[] = [];

    for (const s of spells) {
        let l = 0,
            r = potions.length - 1,
            idx = potions.length;
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            const product = s * potions[mid];
            if (product >= success) {
                r = mid - 1;
                idx = mid;
            } else {
                l = mid + 1;
            }
        }

        result.push(potions.length - idx);
    }

    return result;
}

/*
T.C.: O(N*log(M) + M*log(M))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const spells = [5, 1, 3],
    potions = [1, 2, 3, 4, 5],
    success = 7;
// const spells = [3, 1, 2],
//     potions = [8, 5, 8],
//     success = 16;

console.log(successfulPairs(spells, potions, success));
