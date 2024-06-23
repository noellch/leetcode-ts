/* ------------------------------------------------------------------------------- */

function curry(fn) {
    const arity = fn.length;

    function curried(prevArgs) {
        return function (arg) {
            const args = [...prevArgs, arg];

            if (args.length >= arity) {
                return fn.apply(this, args);
            } else {
                return curried(args);
            }
        };
    }

    return curried([]);
}

function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

const curriedSum2 = curriedSum(1);
const curriedSum3 = curriedSum2(2);
console.log(curriedSum3(3)); // 6, currying of 1st arg
