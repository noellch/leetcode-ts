/* 
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array. 
*/

/* 
Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle. 
*/

// solution 1
function maxSubArray_1(nums: number[]): number {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i] + nums[i - 1], nums[i]);
    }

    return Math.max(...nums);
}

/* 
會改變原本的 nums array。
從 index 1 開始遍歷 nums。每一次的 nums[i] 都選擇要不要加上前一項。（如果加上前一項比自己大的話就加上）
如果不加上就等於從當下這項 nums[i] 開始一個 subarray。
由下一項去判斷要不要成為這個 subarray 的一部分。（如果加上的和大於自己）
所以這樣一直到下一個不打算加上前一項的 nums[i]，它的 nums[i-1] 就會是那個 subarray 元素的和。
*/

/* 
T.C.: O(n)
S.C.: O(1)
*/

// solution 2
function maxSubArray_2(nums: number[]): number {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum += nums[i];

        if (currentSum < 0) currentSum = 0;
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

/* 
追蹤加上每個元素的和。若和等於負數，可以解讀為對後續的最大和沒有幫助；所以略過當下的元素值。
ex： [1, 2, -4 ,5]
1 + 2 = 3 最大和 3
3 + -4 = -1 最大和還是 3；且這次加上 -4 後的和 -1 對於後續構成最大和沒有幫助。所以重設 currentSum = 0。
0 + 5 = 5 ，最大的 contiguous subarray sum 等於 5
*/

/* 
T.C.: O(n)
S.C.: O(1)
*/
