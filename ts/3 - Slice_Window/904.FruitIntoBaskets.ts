/* 
https://leetcode.com/problems/fruit-into-baskets/description/
*/

/* ------------------------------------------------------------------------------- */

function totalFruit(fruits: number[]): number {
    let r = 0,
        l = 0;
    let result = 0;
    const map: Map<number, number> = new Map();

    while (r < fruits.length) {
        map.set(fruits[r], (map.get(fruits[r]) || 0) + 1);

        while (map.size > 2) {
            map.set(fruits[l], (map.get(fruits[l]) as number) - 1);
            if (map.get(fruits[l]) === 0) map.delete(fruits[l]);
            l++;
        }
        result = Math.max(result, r - l + 1);
        r++;
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const fruits = [1, 2, 1];
// const fruits = [0, 1, 2, 2];
const fruits = [1, 2, 3, 2, 2];
// const fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];

console.log(totalFruit(fruits));
