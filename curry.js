function curry(func) {
    return function curried(...args) {
        // If passed args count is the same or more than the original function has in its definition (func.length) , then just pass the call to it using func.apply.
        if (args.length >= func.length) {
            return func.apply(this, args)
        } else {
            // Otherwise, get a partial: we don’t call func just yet. Instead, another wrapper is returned, that will re-apply curried providing previous arguments together with the new ones.
            return function (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

function sum(a, b, c) {
    return a + b + c
}

let curriedSum = curry(sum)

// console.log(curriedSum(1, 2, 3)) // 6, still callable normally
console.log(curriedSum(1)(2, 3)) // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3))
