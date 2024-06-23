// function validAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false

//     const str1Obj = {}
//     const str2Obj = {}

//     for (let char of str1) {
//         str1Obj[char] = ++str1Obj[char] || 1
//     }

//     for (let char of str2) {
//         str2Obj[char] = ++str2Obj[char] || 1
//     }

//     for (let key in str1Obj) {
//         if (!(key in str2Obj)) return false

//         if (str1Obj[key] !== str2Obj[key]) return false
//     }

//     return true
// }

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false

    const obj = {}

    for (let char of str1) {
        obj[char] = obj[char] ? ++obj[char] : 1
    }

    for (let char of str2) {
        if (!obj[char]) {
            return false
        } else {
            obj[char]--
        }

        console.log(obj)
    }

    return true
}

console.log(validAnagram('plppkpkv', 'kpkplppd'))
