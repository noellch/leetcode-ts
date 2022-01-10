/* Q: Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order. */

var intersect = function (nums1: number[], nums2: number[]): number[] {
    const result: number[] = []
    const table: { [key: number]: number } = {}

    for (const num of nums1) {
        table[num] = ++table[num] || 1
    }

    console.log(table)

    for (const num of nums2) {
        if (table[num]) {
            result.push(num)
            table[num]--
        }
    }

    return result
}

console.log(intersect([4, 9, 9, 5], [9, 4, 9, 8, 4]))

/**
 *
 *  建立一個 {} bucket。
 *  將 nums1 這個 array 的值作為 bucket 的 key；出現過的次數作為 value。ex: { '4': 1, '5': 1, '9': 1 }
 *  將 num2 裡的值個別拿出來跟 bucket 作比較。若有等於 bucket 中的 key 等於這個值曾出現在 num1。
 *  將個值 push 進 result。接著將 bucket 中以這個值為 key 的 value -1，因為這個次數已經被 push 進 result。
 *  ex: result = [4] ， { '4': 0, '5': 1, '9': 1 }。因為 4 已經為 0，所以在下一次 if (bucket[4]) 時，就會被跳過。
 *  最後返回 result
 *
 */
