function throttle(func, time = 300) {
    let trigger = true;

    return function throttle(...args) {
        if (trigger) {
            func.apply(this, args);
            trigger = false;

            setTimeout(() => {
                trigger = true;
            }, time);
        }
    };
}
