function sameFrequency(num1, num2) {
    const str1 = num1.toString()
    const str2 = num2.toString()

    if (str1.length !== str2.length) return false
    let obj = {}

    for (let digital of str1) {
        obj[digital] = ++obj[digital] || 1
    }

    for (let digital of str2) {
        if (!obj[digital]) {
            return false
        } else {
            obj[digital]--
        }
    }

    return true
}

console.log(sameFrequency(189672, 279196))
