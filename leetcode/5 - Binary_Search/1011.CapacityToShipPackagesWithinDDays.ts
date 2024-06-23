/* 
https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/
*/

/* ------------------------------------------------------------------------------- */

function shipWithinDays(weights: number[], days: number): number {
    function canShip(cap: number) {
        let ships = 1;
        let currentCap = cap;

        for (const weight of weights) {
            if (currentCap - weight < 0) {
                ships++;
                currentCap = cap;
            }

            currentCap -= weight;
        }

        return ships <= days;
    }

    let l = Math.max(...weights),
        r = weights.reduce((a, c) => a + c, 0);
    let result = r;

    while (l <= r) {
        const cap = l + Math.floor((r - l) / 2);

        if (canShip(cap)) {
            r = cap - 1;
            result = Math.min(result, cap);
        } else {
            l = cap + 1;
        }
    }

    return result;
}

/*
T.C.: O(N * log(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    days = 5;
// const weights = [3, 2, 2, 4, 1, 4],
//     days = 3;

console.log(shipWithinDays(weights, days));
