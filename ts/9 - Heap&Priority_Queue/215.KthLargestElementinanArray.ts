/* 
https://leetcode.com/problems/kth-largest-element-in-an-array/description/
*/

/* ------------------------------------------------------------------------------- */
// Quick Select
function findKthLargest(nums: number[], k: number): number {
  k = nums.length - k

  function quickSelect(l: number, r: number): number {
    let pivot = nums[r],
      swap = l

    for (let i = l; i < r; i++) {
      if (nums[i] <= pivot) {
        ;[nums[swap], nums[i]] = [nums[i], nums[swap]]
        swap += 1
      }
    }
    ;[nums[swap], nums[r]] = [nums[r], nums[swap]]
    if (swap > k) return quickSelect(l, swap - 1)
    else if (swap < k) return quickSelect(swap + 1, r)
    else return nums[swap]
  }

  return quickSelect(0, nums.length - 1)
}

/*
T.C.: O(N)
average case O(n): 每次都搜當下尋一半的 array。n + n/2 + n/4 ... := 2N := O(N)
worse case O(N^2): 每次找到的 pivot 都剛好比其他數還大，導致每次都要 loop 幾乎整個 array 一次，共 N^2 次。
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const nums = [3, 2, 1, 5, 6, 4],
  k = 2
// const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
//     k = 4;

console.log(findKthLargest(nums, k))
