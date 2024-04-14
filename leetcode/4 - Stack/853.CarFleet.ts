/* 
https://leetcode.com/problems/car-fleet/description/
*/

/* ------------------------------------------------------------------------------- */

/* monotonic increasing stack problem */

function carFleet(target: number, position: number[], speed: number[]): number {
    const stack = [] as number[];

    const sortedCars = position
        .reduce<[number, number][]>((a, c, i) => {
            a.push([c, speed[i]]);
            return a;
        }, [])
        .sort((a, b) => b[0] - a[0]);

    for (const sortedCar of sortedCars) {
        stack.push((target - sortedCar[0]) / sortedCar[1]);
        while (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]) {
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
