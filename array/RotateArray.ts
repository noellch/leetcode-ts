var rotate = function (nums: number[], k: number): void {
    function reverse(arr: number[], start: number, end: number) {
        while (start < end) {
            ;[arr[start], arr[end]] = [arr[end], arr[start]]

            start++
            end--
        }
    }

    k = k % nums.length

    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
}

const input = [1, 2, 3, 4, 5, 6, 7],
    k = 3

console.log(rotate(input, k))
