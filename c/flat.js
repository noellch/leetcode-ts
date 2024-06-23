Array.prototype.myFlat = function (dp = Infinity) {
    const result = [];

    function flatten(arr, dp) {
        for (const a of arr) {
            if (dp && Array.isArray(a)) {
                flatten(a, dp - 1);
            } else {
                result.push(a);
            }
        }
    }

    flatten(this, dp);

    return result;
};

const arr = [1, 2, 3, [4, 5], [6, [7, 8, [9]]]];

console.log(arr.myFlat());
