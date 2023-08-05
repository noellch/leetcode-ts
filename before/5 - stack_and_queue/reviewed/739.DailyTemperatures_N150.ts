/* 
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
*/

function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = Array(temperatures.length).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const temp = stack.pop()!;
            result[temp] = i - temp;
        }

        // 只記錄元素的 index。用 index 去 temperature 內找元素值就可以了。
        stack.push(i);
    }

    return result;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperatures(temperatures));

/* 
monotonic stack 
- 當 stack 中新增元素時，stack 必須把持單調遞增或單調遞減。
- 每個元素必定會被放入 stack 中，但出了 stack 就不會再被放回去。

Monotonic stack 時間複雜度：因為每個元素都只會被 push 跟 pop 一次，所以是 O(n)
*/

/* 
只要下一個元素破壞了 monotonic decreasing stack；也就是說比 stack 最後一個元素還大，就更新 stack，把不符合的元素 pop 出 stack。
讓 stack 維持在 monotonic decreasing stack 的狀態。
每 pop 出一個元素，就更新結果。把 result[pop出的元素的 index] 等於當下的 index i 減去 pop出的元素的 index。
*/

/*
T.C.: O(n)
S.C.: O(n)
*/
