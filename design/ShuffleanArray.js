/* Q: Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array. */

var Solution = function (nums) {
    this.nums = nums
}

Solution.prototype.reset = function () {
    return this.nums
}

Solution.prototype.shuffle = function () {
    // 複製一個新的 copy array，不要動到原始的 this.nums。記得要創建一個新的 array [...this.nums]，不然還是會動到原始的 array，因為 array 是 call by reference。
    let shuffledNums = [...this.nums]

    let len = shuffledNums.length
    let i, temp

    while (len) {
        //Fisher–Yates Shuffle 就是 shuffle array in-place。
        // 隨機從 array 中選中一個值，每 pick 一次，能選的值會少一。所以 random 的數字 range 從 0 ~ array.length 一直往下，直到 0 跳出迴圈。
        // i 就是隨機選中的 index。
        i = Math.floor(Math.random() * len--)

        // 重點是要將選中的值不斷的跟 array 的最後一位交換。這樣會讓還沒被選過的值都聚集在 array 的前端，而選過的值都聚集在 array 的後半部。
        temp = shuffledNums[len]
        shuffledNums[len] = shuffledNums[i]
        shuffledNums[i] = temp
    }
    // 最後跳出迴圈時，每個值都會被選過一次，也都會不在自己本來的位置上。

    return shuffledNums
}

const solution = new Solution([1, 2, 3, 4, 5, 6, 7, 8, 9])

console.log(solution.shuffle())
console.log(solution.reset())

//* 這題可以用到 Fisher–Yates Shuffle。參考資料：https://bost.ocks.org/mike/shuffle/
//* 兩個重點：
//* 隨機選的 index 數量每一次選取都要減一。
//* 還沒被選過的值保持在 array 的前半部，選過的聚集在 array 的後半部。前半部的值被選到後，即刻跟最後一位還沒被選到的值交換位置。
