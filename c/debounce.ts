// 連續觸發時只有最後一次觸發後 n 秒才執行 func
function debounce(func, time = 300) {
    let timer: number;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => func.apply(this, args), time);
    };
}

// 連續觸發時只有第一次執行 func。最後一次觸發後 n 秒才能重新執行 func
function debounce_leading(func, time = 300) {
    let timer: number;

    return function (...args) {
        if (!timer) func.apply(this, args);

        clearTimeout(timer);

        timer = setTimeout(() => {
            timer = undefined;
        }, time);
    };
}
