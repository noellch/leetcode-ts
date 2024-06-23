function countUniqueValues(arr) {
    const len = arr.length

    if (!len) return 0

    let i = 0
    let j = 1

    while (j < len) {
        if (arr[i] === arr[j]) {
            j++
        } else {
            i++
            arr[i] = arr[j]
        }
    }

    return i + 1
}

console.log(countUniqueValues([]))
