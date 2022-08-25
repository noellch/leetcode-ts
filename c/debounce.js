function debounce(func, wait = 300) {
    let timer = null;

    return function (...args) {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

function debounce_leading(func, time = 300) {
    let timer = null;

    return function (...args) {
        if (!timer) func.apply(this, args);

        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
            timer = null;
        }, wait);
    };
}
