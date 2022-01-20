/** Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

  */

function canPartition(nums: number[]): boolean {
    let sum = nums.reduce((a, c) => a + c, 0)

    if (sum % 2) return false
    let set: Set<number> = new Set()
    const target = sum / 2

    set.add(0)

    for (let i = 0; i < nums.length; i++) {
        const nextSet: Set<number> = new Set()
        for (let t of set) {
            nextSet.add(t + nums[i])
            nextSet.add(t)
        }
        set = nextSet
    }

    return set.has(target) ? true : false
}

const nums = [1, 5, 11, 5]
console.log(canPartition(nums))
