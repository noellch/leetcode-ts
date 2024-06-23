function myNew(constructor, ...args) {
    const O = Object.create(constructor.prototype);
    const result = constructor.apply(O, args);

    return typeof result === 'object' && result !== null ? result : O;
}
