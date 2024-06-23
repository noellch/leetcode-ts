function debounce(func, wait = 300) {
    let timer = null;

    return function (...args) {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

function debounceLeading(fn, wait = 300) {
    let timer = null;

    return function (...args) {
        if (!timer) fn.apply(this, args);

        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
            timer = null;
        }, wait);
    };
}
