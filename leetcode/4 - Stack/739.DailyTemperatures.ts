/* 
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
*/

/* ------------------------------------------------------------------------------- */

/* monotonic decreasing stack problem */
function dailyTemperatures(temperatures: number[]): number[] {
    const result = Array(temperatures.length).fill(0) as number[];
    const stack = [] as number[];

    temperatures.forEach((temperature, i) => {
        while (stack.length > 0 && temperature > temperatures[stack[stack.length - 1]]) {
            const temp = stack.pop() as number;
            result[temp] = i - temp;
        }
        stack.push(i);
    });

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
