/*
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
 */

function canCompleteCircuit(gas: number[], cost: number[]): number {
    let start = 0,
        total = 0,
        tank = 0;

    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        tank += gas[i] - cost[i];

        if (tank < 0) {
            tank = 0;
            start = i + 1;
        }
    }

    return total >= 0 ? start : -1;
}

const gas = [1, 2, 3, 4, 5],
    cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));

/*
 題目有提到若有解會是唯一解。所以只需要判斷每個 gas[i] 有沒有可能是起點，若都不可能則返回 -1。
 假設 start 由 0 開始，如果當前的 gas 減去 cost 大於 0 就可以繼續前進。
 若到某一站時，剩餘的 gas 量為負數了，則表示從上一個假設的起點一直到這個 i 中間的每一站都不可能作為起點，所以更新 start 為 i + 1。
 最後若跑完一整輪，所有的 gas 加總減去 cost 加總為負數，表示沒有一個點可以作為起點。
 反之，start 則為起點。

       X  X  X (一出發就失敗，不可能為起點)
 gas  [1, 2, 3, 4, 5]
 cost [3, 4, 5, 1, 2]
 left -2 -2 -2  3  3    (1+2+3+4+5)-(3+4+5+1+2) = 0
 */

/* 
 T.C.: O(n)
 S.C.: O(1)
 */
