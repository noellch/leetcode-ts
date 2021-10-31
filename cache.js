const cached = (func) => {
    const cache = {}

    return function (...args) {
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

function sum(a, b, c) {
    return a + b + c
}

const f = cached(sum)

console.log(f(1, 2, 4))
console.log(f(1, 2, 4))
