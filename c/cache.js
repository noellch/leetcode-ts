// 1
const cached = (func) => {
    const cache = {}

    return function (...args) {
        // args => `[1, 2, 4]`
        const key = JSON.stringify(args)

        if (key in cache) {
            console.log('Fetching from cache')
            console.log(cache)
            return cache[key]
        } else {
            const result = func(...args)
            cache[key] = result
            return result
        }
    }
}
// 2
var memoize = function (f) {
    var cache = {}

    return function () {
        var arg_str = JSON.stringify(arguments)
        cache[arg_str] = cache[arg_str] || f.apply(f, arguments)
        return cache[arg_str]
    }
}

function sum(a, b, c) {
    return a + b + c
}

const f = cached(sum)

console.log(f(1, 2, 4))
console.log(f(1, 2, 4))
