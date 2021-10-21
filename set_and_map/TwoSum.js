/* Q: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

//* Map 解法
var twoSum = function (nums, target) {
    const m = new Map()
    let arr = []

    nums.forEach((num, i) => {
        if (m.has(num)) {
            arr = [m.get(num), i]
        }

        m.set(target - num, i)
    })

    return arr
}

//* object 解法
var twoSum = function (nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        // 因為 map 的 key 會儲存 target - nums[i], value 則是被減數的 index
        // 往後 loop 時不斷檢查 nums[i] 是不是之前的差，
        if (map[nums[i]] >= 0) {
            // 有的話返回 map[nums[i]] 是之前被減數的 index , i 是當前數的 index
            return [map[nums[i]], i]
        }

        map[target - nums[i]] = i
    }
    return []
}

console.log(twoSum([2, 7, 11, 15], 9))

//* 基礎的 hash map 用法，要學習習慣往這個方向思考
/* A:  */
// 找到陣列中任兩個值相加等於，target 的值。
// obj = {
//  目標值減各個元素後的值：被減元素的 index
// }

/* Input: nums = [3,2,4], target = 6
Output: [1,2] */

// obj 裡有 key = 3 嗎？沒有
// 6 - 3
// obj = { 3: 0 }
// obj 裡有 key = 2 嗎？ 沒有
// 6 - 2
// obj = { 3: 0 , 4: 1 }
// obj 裡有 key = 4 嗎？有
// 返回當前的 index 以及當初被減元素的 index
