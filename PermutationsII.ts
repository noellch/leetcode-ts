/** Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order. */

function permuteUnique(nums: number[]): number[][] {
    type CountMap = {
        [key: number]: number
    }
    const result: number[][] = []
    const perm: number[] = []
    const countMap: CountMap = {}

    // 設定 hash map
    for (const num of nums) {
        countMap[num] = (countMap[num] ?? 0) + 1
    }

    function dfs() {
        // 長度相等時表示所有數字都被考慮到了，抵達 tree 底部
        if (perm.length === nums.length) {
            // 因為操控的都是同一個 array reference，所以複製一份結果放進 result
            result.push(Array.from(perm))
            return
        }

        // 以 map 內的 key 作為數字的選項
        for (const num in countMap) {
            // 該數字選項出現頻率還大於零，表示還可以被使用
            if (countMap[num] > 0) {
                perm.push(+num)
                // 使用過這個數字後將頻率減 1
                countMap[num]--
                // backtracking
                dfs()
                // pop 出這個值，換下個選項
                perm.pop()
                // 將頻率加回去
                countMap[num]++
            }
        }
    }

    dfs()

    return result
}

console.log(permuteUnique([1, 1, 2]))

/**
 * 跟 Permutations 不同的是，PermutationsII 給定的 array 內的 integer 是會重複的
 * 無法用原本的方法，因為同樣數字 backtracking 的分支結果會是一樣的
 * 設定 hash map => {數字：出現次數}
 * ex: [1,1,2] => {1 : 2, 2 : 1}
 * 再用這個 map 為基準做 backtracking
 */
