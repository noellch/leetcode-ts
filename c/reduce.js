Array.prototype.myReduce = function (cb, initVal) {
    let current = initVal || this[0];
    let idx = initVal ? 0 : 1;

    for (let i = idx; i < this.length; i++) {
        current = cb(current, this[i], i, this);
    }

    return current;
};
