const subclass = (subC, superC) => {
    const superPrototype = Object.getPrototypeOf(superC);
    const subProto = Object.create(superPrototype);

    const subC_prototype_properties = Object.getOwnPropertyNames(subC.prototype);
    subC_prototype_properties.forEach((prop) => {
        const subC_prototype_prop_descriptor = Object.getOwnPropertyDescriptor(subC.prototype, prop);
        Object.defineProperty(subProto, prop, subC_prototype_prop_descriptor);
    });

    subC.prototype = subProto;
    subC._super = superC.prototype;
};
