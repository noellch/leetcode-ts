/* Q: There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique */

//? 一條圓形的道路，沿途佈滿加油站。而我開著一輛油箱 gas 為 0 的車。
//?給定兩個 integers array。array gas 的每一個值代表每個加油站可以補充的 gas 單位；array cost 的每一個值代表補充完 gas，要繼續開到下一個加油站所需要花的 gas 單位。
//? 可以從任一加油站出發，試問可否開車繞完這條圓形的路回道最初的加油站。
//? 若可以，返回起點加油站的 index，反之，返回 -1。

// solution 1
// var canCompleteCircuit = function (gas: number[], cost: number[]): number {
//     let tank = 0
//     let total = 0
//     let start = 0
//     const len = gas.length

//     for (let i = 0; i < len; i++) {
//         // 累計跑完一整圈剩下的 gas
//         total += gas[i] - cost[i]
//         // 以 0 為起點到 i 所剩下的 gas，若小於 0，表示從 0 到 i 這段都不可能當作起點，
//         // 所以將起點重設為 i + 1
//         tank += gas[i] - cost[i]

//         if (tank < 0) {
//             tank = 0
//             start = i + 1
//         }
//     }

//     return total < 0 ? -1 : start
// }

/**
 *
 * 因為題目有提到若有解會是唯一解。所以只需要判斷每個 gas[i] 有沒有可能是起點，若都不可能則返回 -1。
 * 假設 start 由 0 開始，如果當前的 gas 減去 cost 就可以繼續前進。若到某一站時，剩餘的 gas 量為負數了，則表示從上一個假設的起點一直到這個 i
 * 中間的每一站都不可能作為起點，所以更新 start 為 i + 1。最後若跑完一整輪，所有的 gas 加總減去 cost 加總為負數，表示沒有一個點可以作為起點，
 * 反之，start 則為起點。
 *
 */

// solution 2
var canCompleteCircuit = function (gas: number[], cost: number[]): number {
    let max = -Infinity
    let total = 0
    let start = 0
    const len = gas.length

    for (let i = len - 1; i >= 0; i--) {
        // i 到 最後所剩下的 gas 量
        total += gas[i] - cost[i]

        // max 代表由 i 到最後所剩下的 gas 量的最大值，
        // 只要是大於之前的最大值，就表示油量足夠由 i 到最後，故更新 start 為 i。
        if (total > max) {
            max = total
            start = i
        }
    }

    // 若 total 為負，表示無論哪個為起點都不可能跑完一輪。
    return total < 0 ? -1 : start
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
