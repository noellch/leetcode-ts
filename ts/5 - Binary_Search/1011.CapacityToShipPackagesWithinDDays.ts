/* 
https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/
*/

/* ------------------------------------------------------------------------------- */

function shipWithinDays(weights: number[], days: number): number {
    let l = Math.max(1, ...weights),
        r = weights.reduce((a, c) => a + c);
    let result = r;

    function canShip(w: number) {
        let ships = 1;
        let cap = 0;
        for (const weight of weights) {
            if (cap + weight > w) {
                ships++;
                cap = 0;
            }
            cap += weight;
        }

        return ships <= days;
    }

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (canShip(m)) {
            result = Math.min(result, m);
            r = m - 1;
        } else {
            l = m + 1;
        }
    }

    return result;
}

/*
T.C.: O(N * log(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const weights = [1, 2, 3, 1, 1],
    days = 4;
// const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     days = 5;
// const weights = [3, 2, 2, 4, 1, 4],
//     days = 3;

console.log(shipWithinDays(weights, days));
