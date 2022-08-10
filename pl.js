const a = {
    toString: function () {
        return '999';
    },
};

const b = {
    valueOf: function () {
        return 1000;
    },
};

// 這邊是調用 toString 方法
console.log(String(a)); // "999"

// 若用 + '' 是經過 ToPrimitive 的運作，調用 valueOf 方法轉成基本型別後，再用 toString 轉成字串
console.log(b + ''); // "1000"
