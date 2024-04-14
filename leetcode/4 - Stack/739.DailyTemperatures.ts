/* 
https://leetcode.com/problems/daily-temperatures/description/
*/

/* ------------------------------------------------------------------------------- */

/* monotonic decreasing stack problem */
function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = Array(temperatures.length).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < temperatures.length; i += 1) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const temp = stack.pop() as number;
            result[temp] = i - temp;
        }

        stack.push(i);
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// const temperatures = [30,40,50,60]
// const temperatures = [30,60,90]

console.log(dailyTemperatures(temperatures));
