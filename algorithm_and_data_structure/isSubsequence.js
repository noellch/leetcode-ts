// function isSubsequence(str1, str2) {
//     if (str1.length === 0) return true
//     if (str2.length === 0) return false

//     if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1))
//     return isSubsequence(str1, str2.slice(1))
// }

function isSubsequence(str1, str2) {
    let i = 0
    let j = 0

    while (j < str2.length) {
        if (str2[j] !== str1[i]) j++
        else i++

        if (i === str1.length) return true
    }
    return false
}

console.log(isSubsequence('acv', 'akmcgwav'))
