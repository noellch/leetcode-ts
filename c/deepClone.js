function deepClone(obj, hash = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) return obj;
    if (hash.has(obj)) return hash.get(obj);

    const newObj = Array.isArray(obj) ? [] : {};
    hash.set(obj, newObj);

    for (let [key, value] of Object.entries(obj)) {
        newObj[key] = deepClone(value, hash);
    }

    return newObj;
}
