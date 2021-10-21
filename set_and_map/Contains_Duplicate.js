/* A: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. */

//! 以下兩種解法效能都不夠好...
var containsDuplicate1 = function (nums) {
    const len = nums.length
    const after = nums.filter((num, i, arr) => {
        return arr.indexOf(num, 0) === i
    })

    const afterLen = after.length

    return afterLen < len
}

const containsDuplicate2 = nums => {
    let temp = []

    for (let i in nums) {
        if (temp.indexOf(nums[i]) < 0) {
            temp.push(nums[i])
        } else {
            return true
        }
    }
    return false
}
//!

//* 效能最好
var containsDuplicate = function (nums) {
    return new Set(nums).size < nums.length
}
//*

//* 單純運用 Set 內值不會重複的特性，先建立 new Set 去重，再將去重後的 Set.size 跟 原本的陣列相比。其實跟上述第一種方法的思考邏輯有點類似。
