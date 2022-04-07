function fn(impl) {
    const mockFn = (...args) => {
        return impl(...args)
    }
    return mockFn
}

function fn(impl) {
    const mockFn = (...args) => {
        mockFn.mock.calls.push(args)
        return impl(...args)
    }
    mockFn.mock = { calls: [] }
    return mockFn
}
