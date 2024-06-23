function unary(fn) {
    return function (arg) {
        return fn(arg);
    };
}

function spreadArgs(fn) {
    return function (arrArg) {
        return fn(...arrArg);
    };
}

function gatherArgs(fn) {
    return function (...args) {
        return fn(args);
    };
}

function partial(fn, ...presetArgs) {
    return function partiallyApplied(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}
