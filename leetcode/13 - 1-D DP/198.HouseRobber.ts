/* 
https://leetcode.com/problems/house-robber/description/
*/

/* ------------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------- */

// DFS
// function rob(nums: number[]): number {
//     const dp: Record<number, number> = {
//         0: nums[0],
//         1: Math.max(nums[0], nums[1]),
//     }; // houseIndex: maxCount

//     function dfs(i: number): number {
//         if (i < 0) return 0;
//         if (i in dp) return dp[i];

//         const result = Math.max(dfs(i - 2) + nums[i], dfs(i - 1));
//         dp[i] = result;

//         return result;
//     }

//     return dfs(nums.length - 1);
// }

/* 
從有三間房子的情況開始。三間房子能搶大最大的金額 = max(（目前房子的金額 + 有 i - 2 間房子能搶到最大金額 ）以及（有 i - 1 間房子能搶到最大金額）)
主要思維：
若房子有一間，那最大金額就是搶那間房子。f(1)
若房子有兩間，那最大金額就是搶這兩間房子擁有金額較大的那間。Math.max(f(1), f(2))
若房子有三間，要決定第三間房子搶或不搶。若搶，等於 f(1) + 當前房屋金額，
若不搶，就跟房子只有兩間的情況是一樣的。所以有三間房子能搶到的最大金額等於 Math.max(f(1) + 當前房屋, 只有兩間房屋最大金額)
若房子有四間，要決定第四間房子搶或不搶。若搶，等於 f(2) + 當前房屋金額，
若不搶，就跟房子只有三間的情況是一樣的。所以有四間房子能搶到的最大金額等於 Math.max(f(2) + 當前房屋, 只有三間房屋最大金額)
若房子有五間，要決定第五間房子搶或不搶。若搶，等於 f(3) + 當前房屋金額, f(4)，
若不搶，就跟房子只有四間的情況是一樣的。所以有五間房子能搶到的最大金額等於 Math.max(f(3) + 當前房屋, 只有四間房屋最大金額)
所以建立一個 maxArray，每個 index 儲存有 i 間房子能搶到最大的金額。
譬如，maxArray[0] 儲存只有一間房子能搶大的最大金額，maxArray[1] 儲存只有兩間房子能搶大的最大金額...
*/

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// Iterative
// function rob(nums: number[]): number {
//     const dp = Array(nums.length).fill(0);
//     dp[0] = nums[0]; // 只有一間房子時
//     dp[1] = Math.max(nums[0], nums[1]); // 只有兩間房子時

//     for (let i = 2; i < nums.length; i++) {
//         dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
//     }

//     return dp[nums.length - 1];
// }

/*
T.C.: O(N)
S.C.: O(N)
*/

function rob(nums: number[]): number {
    let current = 0,
        prev = 0;

    for (const num of nums) {
        const temp = current;
        current = Math.max(current, prev + num);
        prev = temp;
    }

    return current;
}

/**
 * 計算有 n 間房子最大金額只需要 n-1
 * 所以空間複雜度可以從 O(N) 優化成 O(1)
 */

/*
T.C.: O(N)
S.C.: O(1)
*/
/* ------------------------------------------------------------------------------- */

// const nums = [1, 2, 3, 1];

const nums = [2, 7, 9, 3, 1];

console.log(rob(nums));
