function myInstanceOf(ins, target) {
    if (!ins) return false;

    return ins.__proto__ === target.prototype ? true : myInstanceOf(ins.__proto__, target);
}

function C(obj, mth) {
    let owner = obj;

    while (owner && !owner.hasOwnProperty(mth)) {
        owner = owner.__proto__;
    }

    if (!owner) throw new Error('method not found');
    else {
        owner[mth].call(obj);
    }
}
