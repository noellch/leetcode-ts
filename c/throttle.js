function throttle(func, wait = 30000) {
    let trigger = true
    return function (...args) {
        if (trigger) {
            func.apply(this, args)
            trigger = false

            setTimeout(() => {
                trigger = true
            }, wait)
        }
    }
}
