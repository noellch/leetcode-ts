function areThereDuplicates1() {
    console.log(new Set(arguments))
    let collection = {}

    for (let arg in arguments) {
        collection[arguments[arg]] = ++collection[arguments[arg]] || 1
    }

    for (let key in collection) {
        if (collection[key] > 1) return true
    }

    return false
}

function areThereDuplicates2(...args) {
    args.sort((a, b) => a > b)

    let start = 0
    let next = 1
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

console.log(areThereDuplicates('a', 'c', 'c'))
