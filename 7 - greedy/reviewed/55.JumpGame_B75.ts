/* You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise. */

var canJump1 = function (nums: number[]): boolean {
    let goal = nums.length - 1;

    // 如果當下已到達的距離(i) 加上可走的距離(nums[i]) 大於或等於目標
    // 將 i 設定為新的目標。因為 i 若可到達 goal，表示只要能到達 i 就可以到達 goal
    for (let i = goal - 1; i >= 0; i--) {
        if (i + nums[i] >= goal) goal = i;
    }

    return goal === 0;
};

const nums = [2, 3, 1, 1, 4];

console.log(canJump1(nums));

var canJump2 = function (nums: number[]): boolean {
    // 目前最遠可到達的距離，會動態被更新
    // ex: [2, 1, 1, 2, 3]
    // 2 最遠可以到 2 + 0(index 0) = 2 farthest = 2
    // 1 最遠可以到 1 + 1(index 1) = 2 farthest = 2
    // 1 最遠可以到 1 + 2(index 2) = 3 farthest = 3
    // 2 最遠可以到 2 + 3(index 3) = 5 farthest = 5
    let farthest = 0;

    // 若最遠可到 5
    // i 不斷前進更新當下最遠可走到哪裡，但 i 不能超過目前最遠可到達的距離
    // 因為若 i 超過，表示最遠的距離已經到不了 i 在的地方
    for (let i = 0; i < nums.length && i <= farthest; i++) {
        farthest = Math.max(farthest, i + nums[i]);
    }

    return farthest >= nums.length - 1;
};

console.log(canJump2(nums));
