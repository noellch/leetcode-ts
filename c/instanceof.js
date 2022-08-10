function instance_of(ins, target) {
    if (!ins) return false;
    return ins.__proto__ === target.prototype ? true : instance_of(ins.__proto__, target);
}
