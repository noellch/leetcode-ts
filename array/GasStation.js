/* Q: There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique */

//? 一條圓形的道路，沿途佈滿加油站。而我開著一輛油箱 gas 為 0 的車。
//?給定兩個 integers array。array gas 的每一個值代表每個加油站可以補充的 gas 單位；array cost 的每一個值代表補充完 gas，要繼續開到下一個加油站所需要花的 gas 單位。
//? 可以從任一加油站出發，試問可否開車繞完這條圓形的路回道最初的加油站。
//? 若可以，返回起點加油站的 index，反之，返回 -1。

//* original solution

// 效能太差...
// var canCompleteCircuit = function (gas, cost) {
//     let p, tank
//     const len = gas.length
//     for (let i = 0; i < len; i++) {
//         tank = 0
//         p = i
//         while (p < len + i) {
//             let idx = p % len
//             tank = tank + gas[idx] - cost[idx]
//             console.log(idx, tank)
//             ++p
//             if (tank < 0) {
//                 break
//             }
//         }
//         if (tank >= 0) {
//             return i
//         }
//     }
//     return -1
// }

var canCompleteCircuit = function (gas, cost) {
    let tank = 0
    let total = 0
    let start = 0
    const len = gas.length

    for (let i = 0; i < len; i++) {
        total = total + gas[i] - cost[i]
        tank = tank + gas[i] - cost[i]

        if (tank < 0) {
            tank = 0
            // 捨棄 i 為起點的可能性，假設 i + 1 為起點。
            start = i + 1
        }
    }

    if (total < 0) return -1
    // for loop 結束若 total 為正，則唯一起點會是那個 tank 沒 run out 成負數的 i。
    return start
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
// console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]))

//* 一開始的解法是以各個 gas[i] 當作起點跑一圈看結果是不是大於 0，但這樣 runtime complexity 會是 O(n^2)，效能很差。
//* 更好的方法是：因為題目有提到若有解會是唯一解。所以只需要判斷每個 gas[i] 有沒有可能是起點，若都不可能則返回 -1。

// 若有解會是唯一解這句話是關鍵。
// total 定義了總共跑完一整圈會剩下多少 gas，無論正負。若是負，無論從哪個 gas station 為起點都不可能跑完一輪。
// tank 定義了以 gas[i] 為起點開始 gas 的狀態。只要遇到負數，表示這個 i 不可能是起點。
// 遇到 tank 為負數時表示可以捨棄以 i 為起點的可能性，再次以 i + 1 為起點做判斷，tank 從新設定為 0。
// 若是從 gas[i] 一直到 gas[gas.length -1] 都找不到起點，也就表示 total 一定會是負數。
// 若 total 為正數，表示可能存在唯一起點。而這個起點會是 gas[i] 開始 tank 不等於 負數的 i。
