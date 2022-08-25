function throttle(func, wait = 300) {
    let trigger = true;

    return function (...args) {
        if (trigger) {
            func.apply(this, args);
            trigger = false;

            window.setTimeout(() => {
                trigger = true;
            }, wait);
        }
    };
}
