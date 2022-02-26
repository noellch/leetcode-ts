function* g() {
    const a = yield '123'
    console.log(a)
    yield '456'
    return '000'
}

const h = g()
console.log(h.next())
console.log(h.next(3))
console.log(h.next())
