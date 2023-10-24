/* 
A conveyor belt has packages that must be shipped from one port to another within days days.

The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.
*/

/* ------------------------------------------------------------------------------- */

function shipWithinDays(weights: number[], days: number): number {
    function canShip(cap: number): boolean {
        let ships = 1,
            currentCap = cap;

        for (const w of weights) {
            if (currentCap - w < 0) {
                ships++;
                currentCap = cap;
            }

            currentCap -= w;
        }

        return ships <= days;
    }

    let l = Math.max(...weights),
        r = weights.reduce((acc, cur) => acc + cur, 0),
        result = r;
    while (l <= r) {
        let cap = l + Math.floor((r - l) / 2);
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

// const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     days = 5;
const weights = [3, 2, 2, 4, 1, 4],
    days = 3;

console.log(shipWithinDays(weights, days));
