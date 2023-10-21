/* 
You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.
*/

/* ------------------------------------------------------------------------------- */

function totalFruit(fruits: number[]): number {
    let r = 0,
        l = 0;
    const map: Map<number, number> = new Map();
    let result = 0;

    while (r < fruits.length) {
        map.set(fruits[r], (map.get(fruits[r]) || 0) + 1);

        while (map.size > 2) {
            map.set(fruits[l], (map.get(fruits[l]) as number) - 1);
            if (!map.get(fruits[l])) map.delete(fruits[l]);
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
// const fruits = [1, 2, 3, 2, 2];
const fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];

console.log(totalFruit(fruits));
