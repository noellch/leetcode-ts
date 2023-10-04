/* 
You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.
*/

/* ------------------------------------------------------------------------------- */

// function findTargetSumWays(nums: number[], S: number): number {
//     const map: Map<string, number> = new Map();

//     function dfs(idx: number, total: number): number {
//         if (idx === nums.length) {
//             if (total === S) return 1;
//             else return 0;
//         }

//         if (map.has(`${idx}-${total}`)) return map.get(`${idx}-${total}`) as number;

//         const result = dfs(idx + 1, total + nums[idx]) + dfs(idx + 1, total - nums[idx]);

//         map.set(`${idx}-${total}`, result);

//         return result;
//     }

//     return dfs(0, 0);
// }

/*
T.C.: O(2^N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

function findTargetSumWays(nums: number[], S: number): number {
    const sum = nums.reduce((total, num) => total + num, 0);

    if (S > sum || S < -sum) {
        return 0;
    }

    let dp = new Array(2 * sum + 1).fill(0);
    dp[nums[0] + sum] = 1;
    dp[-nums[0] + sum] += 1;

    for (let i = 1; i < nums.length; i++) {
        const next = new Array(2 * sum + 1).fill(0);

        for (let s = 0; s < 2 * sum + 1; s++) {
            if (dp[s] > 0) {
                next[s + nums[i]] += dp[s];
                next[s - nums[i]] += dp[s];
            }
        }
        dp = next;
        console.log(dp);
    }

    return dp[S + sum];
}

/*
T.C.: O((2)sum * N)
S.C.: O(sum)
*/

/* ------------------------------------------------------------------------------- */

// function findTargetSumWays(nums: number[], S: number): number {
//     const sum = nums.reduce((total, num) => total + num, 0);

//     if (S > sum || (S + sum) % 2 !== 0) {
//         return 0;
//     }

//     const target = (S + sum) / 2;
//     const dp: number[][] = new Array(nums.length).fill(null).map(() => new Array(S).fill(0));
//     dp[0][0] = 1;

//     for (let i = 1; i <= nums.length; i++) {
//         for (let j = 0; j <= target; j++) {
//             dp[i][j] = dp[i - 1][j];
//             if (j >= nums[i - 1]) {
//                 dp[i][j] += dp[i - 1][j - nums[i - 1]];
//             }
//         }
//     }

//     return dp[nums.length][target];
// }

/* 
超難。完全不懂！！！
*/
/* ------------------------------------------------------------------------------- */

const nums = [1, 1, 1, 1, 1],
    target = 3;
// const nums = [100],
//     target = -200;

console.log(findTargetSumWays(nums, target));
