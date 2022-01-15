/* Q: Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

var groupAnagrams = function (strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map()
    let r: string

    for (const str of strs) {
        r = str.split('').sort().join('')
        map.has(r) ? map.get(r)?.push(str) : map.set(r, [str])
    }

    return [...map.values()]
}

const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(groupAnagrams(input))

/**
 * 考的是 cache 的概念。
 * 重點是有沒有想到 string 可以拆解成 array，sort 後再 join。
 */
