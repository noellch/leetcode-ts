/* 
https://leetcode.com/problems/climbing-stairs/description/
*/

/* ------------------------------------------------------------------------------- */

// var climbStairs = function (n: number): number {
//     const dp: number[] = [1, 1]

//     for (let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2]
//     }

//     return dp[n]
// }

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// var climbStairs = function (n: number): number {
//     let table: { [key: number]: number } = {};

//     const dfs = (n: number): number => {
//         if (n === 1) return 1;
//         if (n === 2) return 2;
//         if (n in table) return table[n];
//         table[n] = dfs(n - 1) + dfs(n - 2);

//         return table[n];
//     };

//     return dfs(n);
// };

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

function climbStairs(n: number): number {
    let one = 1,
        two = 1;
    for (let i = n - 2; i >= 0; i--) {
        const temp = one;
        one = one + two;
        two = temp;
    }

    return one;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const n = 5;
// const n = 3;

console.log(climbStairs(n));
