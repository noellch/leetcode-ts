/* 
https://leetcode.com/problems/gas-station/description/
*/

/* ------------------------------------------------------------------------------- */

function canCompleteCircuit(gas: number[], cost: number[]): number {
    let tank = 0,
        start = 0,
        total = 0;

    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        tank += gas[i] - cost[i];

        if (tank < 0) {
            tank = 0;
            start = i + 1;
        }
    }

    return total < 0 ? -1 : start;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const gas = [1, 2, 3, 4, 5],
    cost = [3, 4, 5, 1, 2];

// const gas = [2, 3, 4],
//     cost = [3, 4, 3];

console.log(canCompleteCircuit(gas, cost));
