/** Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order. */

function subsets(nums: number[]): number[][] {
    const result: number[][] = []

    function helper(n: number[], idx: number, sub: Array<number>) {
        result.push([...sub])

        for (let i = idx; i < n.length; i++) {
            helper(n, i + 1, [...sub, n[i]])
        }
    }

    helper(nums, 0, [])
    return result
}

console.log(subsets([1, 2, 3]))
