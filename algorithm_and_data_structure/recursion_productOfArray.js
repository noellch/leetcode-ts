// function productOfArray(arr) {
//     if (arr.length === 0) return 1

//     return arr[0] * productOfArray(arr.slice(1))
// }

function productOfArray(arr) {
    if (arr.length === 0) return 1

    let item = arr.pop()

    return item * productOfArray(arr)
}

console.log(productOfArray([1, 2, 3, 5, 2, 4]))
