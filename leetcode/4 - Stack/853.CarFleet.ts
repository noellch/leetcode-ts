/* 
There are n cars going to the same destination along a one-lane road. The destination is target miles away.

You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

Return the number of car fleets that will arrive at the destination.
*/

/* ------------------------------------------------------------------------------- */

/* monotonic increasing stack problem */
function carFleet(target: number, position: number[], speed: number[]): number {
    const stack = [] as number[];

    const sortedCars = position
        .reduce((a, c, i) => {
            a.push([c, speed[i]]);
            return a;
        }, [] as [number, number][])
        .sort((a, b) => b[0] - a[0]);

    for (const car of sortedCars) {
        stack.push((target - car[0]) / car[1]);
        if (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop();
        }
    }

    return stack.length;
}

/* 
依照離 target 的距離由近至遠排列車輛。
依次計算每一輛車到達 target 的時間，並放入 stack 中。
若當下的車輛到達 target 的時間比前一輛車還早，表示會與前一輛車組成一個車隊。也就是說這輛車可以被從 stack 中移除。
最後將 stack 的長度回傳，表示會剩下多少車隊。
*/

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const target = 12,
    position = [10, 8, 0, 5, 3],
    speed = [2, 4, 1, 1, 3];
// const target = 10,
//     position = [3],
//     speed = [3];
// const target = 100,
//     position = [0, 2, 4],
//     speed = [4, 2, 1];

console.log(carFleet(target, position, speed));
