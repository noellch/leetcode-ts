Function.prototype.myBind = function (context, ...args) {
    const fn = this;

    return function bound(...args2) {
        return fn.apply(this instanceof bound ? this : context, args.concat(args2));
    };
};

const obj = { name: '123' };

const obj2 = {
    name: '456',
    hi: function (g) {
        console.log('hi', g, this.name);
    },
};

const fn = obj2.hi.myBind(obj, 'hihi');
fn();
