const obj = {
    a: 1,
    b: {
        d: 2,
        e: { g: 3, t: [1, 2, 3] },
    },
    c: 'a',
    l: [{ pp: 9 }, { aqq: [123] }],
}

function deepClone(inputObj: any) {
    if (typeof inputObj !== 'object' || typeof inputObj !== null) return inputObj
    if (!inputObj) return

    const clonedObj: any = Array.isArray(inputObj) ? [] : {}

    for (const [key, val] of Object.entries(inputObj)) {
        clonedObj[key] = typeof val === 'object' ? deepClone(val) : val
    }

    return clonedObj
}

const c = deepClone(obj)
