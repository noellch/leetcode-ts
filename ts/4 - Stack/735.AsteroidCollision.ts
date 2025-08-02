/* 
https://leetcode.com/problems/asteroid-collision/description/
*/

/* ------------------------------------------------------------------------------- */

function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [];

    for (let asteroid of asteroids) {
        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            const diff = stack[stack.length - 1] + asteroid;

            if (diff < 0) {
                stack.pop();
            } else if (diff > 0) {
                asteroid = 0;
            } else {
                stack.pop();
                asteroid = 0;
            }
        }

        if (asteroid) stack.push(asteroid);
    }

    return stack;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const asteroids = [5, 10, -5];
// const asteroids = [8, -8];
// const asteroids = [10, 2, -5];
// const asteroids = [-2, -1, 1, 2];

console.log(asteroidCollision(asteroids));
