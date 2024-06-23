function averagePair(arr, aver) {
    if (arr.length <= 0) return false

    let i = 0
    let j = arr.length - 1

    while (i < j) {
        let av = (arr[i] + arr[j]) / 2

        if (av === aver) {
            return true
        } else if (av < aver) {
            i++
        } else {
            j--
        }
    }
    return false
}

console.log(averagePair([1, 2, 40], 2.5))
