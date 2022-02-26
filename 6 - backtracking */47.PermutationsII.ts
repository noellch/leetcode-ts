/** Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order. */

function permuteUnique(nums: number[]): number[][] {
    type HashMap = {
        [key: number]: number
    }

    const hashMap: HashMap = {}
    const result: number[][] = []
    const cur: number[] = []

    for (const num of nums) {
        hashMap[num] = (hashMap[num] ?? 0) + 1
    }

    function dfs() {
        // 長度相等時表示所有數字都被考慮到了，抵達 tree 底部
        if (cur.length === nums.length) return result.push([...cur])

        // 以 map 內的 key 作為數字的選項
        for (const num in hashMap) {
            // 該數字選項出現頻率等於零，略過這輪
            if (!hashMap[num]) continue

            // 若該數字出現頻率大於零，表示還可以被使用
            cur.push(+num)
            // 使用過這個數字後將頻率減 1
            hashMap[num]--
            dfs()

            cur.pop()
            // 將頻率加回去
            hashMap[num]++
        }
    }

    dfs()

    return result
}

/**
 * 跟 Permutations 不同的是，PermutationsII 給定的 array 內的 integer 是會重複的
 * 無法用原本的方法，因為同樣數字 backtracking 的分支結果會是一樣的
 * 設定 hash map => {數字：出現次數}
 * ex: [1,1,2] => {1 : 2, 2 : 1}
 * 再用這個 map 為基準做 backtracking
 */

console.log(permuteUnique([1, 1, 2]))
