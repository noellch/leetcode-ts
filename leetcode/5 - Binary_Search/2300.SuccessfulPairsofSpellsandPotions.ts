/* 
https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/
*/

/* ------------------------------------------------------------------------------- */

function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b);

    const result: number[] = [];

    for (const s of spells) {
        let l = 0,
            r = potions.length - 1;
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            const product = s * potions[mid];
            if (product >= success) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        result.push(potions.length - l);
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
