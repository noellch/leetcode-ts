// function cache1(func) {
//     const cache = {};

//     return function cached(...args) {
//         const key = JSON.stringify(args);

//         if (key in cache) {
//             console.log('from cache');
//             return cache[key];
//         } else {
//             const result = func.apply(this, args);
//             cache[key] = result;
//             return result;
//         }
//     };
// }

function cache(fn) {
    const cached = {};

    return function (...args) {
        const key = JSON.stringify(args);

        cached[key] = cached[key] || fn.apply(this, args);

        return cached[key];
    };
}

const ca = cache(function (a, b, c) {
    return a + b + c;
});

console.log(ca(1, 2, 3));
console.log(ca(1, 2, 3));
