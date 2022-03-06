const pipe =
    (...fns) =>
    (x) =>
        fns.reduce((y, f) => f(y), x)

const compose =
    (...fns) =>
    (x) =>
        fns.reduceRight((y, f) => f(y), x)

const trace = (label) => (value) => {
    console.log(`${label}: ${value}`)
    return value
}
const g = (n) => n + 1
const f = (n) => n * 2
/* Note: function application order is bottom-to-top: */
const h = compose(trace('after f'), f, trace('after g'), g)
h(20)
/* after g: 21 after f: 42 */

const flip = (fn) => (a) => (b) => fn(b)(a)
