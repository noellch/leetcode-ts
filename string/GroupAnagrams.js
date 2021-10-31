/* Q: Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

var groupAnagrams = function (strs) {
    let group = {}
    let rearranged = null
    for (let str of strs) {
        rearranged = str.split('').sort().join('')
        group[rearranged] ? group[rearranged].push(str) : (group[rearranged] = [str])
    }

    return Object.values(group)
}

const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(groupAnagrams(input))

//* 考的是 cache 的概念。
//* 重點是有沒有想到 string 可以拆解成 array，sort 後再 join。
