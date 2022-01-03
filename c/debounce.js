const debounce = (func, wait) => {
    let timer

    return function executedFn(...args) {
        const later = () => {
            clearTimeout(timer)
            func(...args)
        }

        clearTimeout(timer)
        timer = setTimeout(later, wait)
    }
}
