/* Q: There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique */

//? 一條圓形的道路，沿途佈滿加油站。而我開著一輛油箱 gas 為 0 的車。
//?給定兩個 integers array。array gas 的每一個值代表每個加油站可以補充的 gas 單位；array cost 的每一個值代表補充完 gas，要繼續開到下一個加油站所需要花的 gas 單位。
//? 可以從任一加油站出發，試問可否開車繞完這條圓形的路回道最初的加油站。
//? 若可以，返回起點加油站的 index，反之，返回 -1。

// solution 1/
var canCompleteCircuit = function (gas: number[], cost: number[]): number {
    let total = 0,
        tank = 0,
        start = 0

    for (let i = 0; i < gas.length; i++) {
        // 計算總共剩餘的 gas 量
        total += gas[i] - cost[i]
        // 計算當前總共剩餘的 gas 量
        tank += gas[i] - cost[i]

        // 當下剩餘的 gas 量若小於 0，
        // 則從上個起點 start 到這個 i 中間的每個點都不可能當作起點
        if (tank < 0) {
            // 重新假設以 i+1 當作起點
            tank = 0
            start = i + 1
        }
    }

    return total < 0 ? -1 : start
}

/**
 *
 * 因為題目有提到若有解會是唯一解。所以只需要判斷每個 gas[i] 有沒有可能是起點，若都不可能則返回 -1。
 * 假設 start 由 0 開始，如果當前的 gas 減去 cost 就可以繼續前進。若到某一站時，剩餘的 gas 量為負數了，則表示從上一個假設的起點一直到這個 i
 * 中間的每一站都不可能作為起點，所以更新 start 為 i + 1。最後若跑完一整輪，所有的 gas 加總減去 cost 加總為負數，表示沒有一個點可以作為起點，
 * 反之，start 則為起點。
 *
 *       X  X  X (一出發就失敗，不可能為起點)
 * gas  [1, 2, 3, 4, 5]
 * cost [3, 4, 5, 1, 2]
 * left -2 -2 -2  3  3    (1+2+3+4+5)-(3+4+5+1+2) = 0
 */

// solution 2
var canCompleteCircuit = function (gas: number[], cost: number[]): number {
    let total = 0,
        maxLeft = -Infinity,
        start = 0

    // 找出所剩餘的 gas 最多的點
    // 由後往前遍歷，剩餘最多 gas 量的點，最有可能是起點
    for (let i = gas.length - 1; i >= 0; i--) {
        // 計算總共剩餘的 gas 量
        total += gas[i] - cost[i]

        if (total > maxLeft) {
            maxLeft = total
            start = i
        }
    }

    return total < 0 ? -1 : start
}

/**
 * gas   [1, 2, 3, 4, 5]
 * cost  [3, 4, 5, 1, 2]
 * max    6  6  6  6  3   <- 由後往前 這個點存在剩下的 gas 是最多的。最有可能當作起點
 * total  0  2  4  6  3
 *                 i
 */
