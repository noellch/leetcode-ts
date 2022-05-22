const arr = [1, 2, 3, [4, 5], [6, [7, 8, [9]]]]

function flat(array, dp = Infinity) {
    const flattedArr = []

    ;(function flattener(list, dp) {
        for (const el of list) {
            if (Array.isArray(el) && dp) {
                flattener(el, dp - 1)
            } else {
                flattedArr.push(el)
            }
        }
    })(array, dp)

    return flattedArr
}

const f = flat(arr)

const user = [
    { name: 'a', color: [1, 2, 3] },
    { name: 'b', color: [2, 3, 4] },
    { name: 'c', color: [3, 4, 5] },
]

function flatMap(array, callback) {
    const flattedArr = []
    for (let i = 0; i < array.length; i++) {
        const eleArr = callback(array[i], i, array)

        for (const el of eleArr) {
            flattedArr.push(el)
        }
    }

    return flattedArr
}

const color = flatMap(user, (user, ...args) => user.color)
console.log(color)
