/* 
There are n cars going to the same destination along a one-lane road. The destination is target miles away.

You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

Return the number of car fleets that will arrive at the destination.
*/

/* 
- 計算有車抵達終點時，當下總共有多少車隊。
- 當一輛車追後一輛車時，會變成一個車隊，車隊移動的速度以慢的那輛車為主。
- 一輛車也自成一個車隊。
- 如果一輛車在終點追上另一輛車，也算一個車隊
*/

function carFleet(target: number, position: number[], speed: number[]): number {
    return 1;
}

const target = 12,
    position = [10, 8, 0, 5, 3],
    speed = [2, 4, 1, 1, 3];
