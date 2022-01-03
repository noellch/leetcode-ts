const throttle = (func, wait) => {
    let fire = true
    return function executedFn(...args) {
        if (fire) {
            func(...args)
            fire = false

            setTimeout(() => {
                fire = true
            }, wait)
        }
    }
}
