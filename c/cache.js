// 1
function cache1(func) {
    const cache = {};

    return function cached(...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            console.log('from cache');
            return cache[key];
        } else {
            const result = func.apply(this, args);
            cache[key] = result;
            return result;
        }
    };
}

// 2
function cache2(func) {
    const cache = {};

    return function cached(...args) {
        const key = JSON.stringify(args);
        cache[key] = cache[key] || func.apply(this, args);

        return cache[key];
    };
}

const ca = cache1(function (a, b, c) {
    return a + b + c;
});

console.log(ca(1, 2, 3));
console.log(ca(1, 2, 3));
