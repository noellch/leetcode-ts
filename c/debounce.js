// 連續觸發時只有最後一次觸發後 n 秒才執行 func
function debounce(func, timeout = 300) {
    let timer

    return (...args) => {
        clearTimeout(timer)

        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}
function saveInput() {
    console.log('Saving data')
}
const processChange = debounce(() => saveInput())

// 連續觸發時只有第一次執行 func。最後一次觸發後 n 秒才能重新執行 func
function debounce_leading(func, timeout = 300) {
    let timer

    return (...args) => {
        if (!timer) {
            func.apply(this, args)
        }
        clearTimeout(timer)
        timer = setTimeout(() => {
            timer = undefined
        }, timeout)
    }
}
