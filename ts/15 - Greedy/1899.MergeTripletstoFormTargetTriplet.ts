/* 
https://leetcode.com/problems/merge-triplets-to-form-target-triplet/description/
*/

/* ------------------------------------------------------------------------------- */

function mergeTriplets(triplets: number[][], target: number[]): boolean {
    const good: number[] = [0, 0, 0];

    for (const triplet of triplets) {
        if (triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2]) continue;

        for (let i = 0; i < triplet.length; i++) {
            if (triplet[i] === target[i]) good[i] = 1;
        }
    }

    return good.filter((g) => g).length === 3;
}

/*
T.C.: O(N)
- 因為每個三元組的長度都是固定的 3，所以遍歷所有三元組的時間複雜度是 O(N)，其中 N 是三元組的總數。

S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const triplets = [
//         [2, 5, 3],
//         [2, 3, 4],
//         [1, 2, 5],
//         [5, 2, 3],
//     ],
//     target = [5, 5, 5];
// const triplets = [
//         [3, 1, 7],
//         [1, 5, 10],
//     ],
//     target = [3, 5, 7];

const triplets = [
        [4, 5, 2],
        [4, 2, 7],
        [5, 8, 6],
        [3, 6, 6],
        [4, 5, 2],
    ],
    target = [4, 5, 7];
console.log(mergeTriplets(triplets, target));
