const copyObj = (originObj) => {
    const o_prototype = Object.getPrototypeOf(originObj);
    const newObj = Object.create(o_prototype);

    const o_properties = Object.getOwnPropertyNames(originObj);
    o_properties.forEach((prop) => {
        const o_descriptor = Object.getOwnPropertyDescriptor(originObj, prop);
        Object.defineProperty(newObj, prop, o_descriptor);
    });

    return newObj;
};

const oldObj = { a: 1, b: 2 };
const newObj = copyObj(oldObj);
