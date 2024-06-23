function cloneObj(obj) {
    const proto = Object.getPrototypeOf(obj);
    const newObj = Object.create(proto);
    const keys = Object.getOwnPropertyNames(obj);

    for (let key of keys) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
        Object.defineProperty(newObj, key, descriptor);
    }

    return newObj;
}

const oldObj = { a: 1, b: 2, c: { d: 3 } };
const newObj = cloneObj(oldObj);
newObj.c.d = 4;

console.log(oldObj);
console.log(newObj);
