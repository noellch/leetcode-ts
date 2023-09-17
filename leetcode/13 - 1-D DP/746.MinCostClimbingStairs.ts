/* 
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
*/

/* ------------------------------------------------------------------------------- */

function minCostClimbingStairs(cost: number[]): number {
    for (let i = cost.length - 3; i >= 0; i--) {
        cost[i] = Math.min(cost[i] + cost[i + 1], cost[i] + cost[i + 2]);
    }

    return Math.min(cost[0], cost[1]);
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const cost = [10, 15, 20];

const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

console.log(minCostClimbingStairs(cost));
