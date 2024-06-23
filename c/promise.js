class MPromise {
    constructor(executor) {
        this._state = 'pending';
        this.value = undefined;
        this._onFulfilledCallbacks = [];
        this._onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this._state === 'pending') {
                this._state = 'fulfilled';
                this.value = value;
                this._onFulfilledCallbacks.forEach((callback) => {
                    callback(this.value);
                });
            }
        };

        const reject = (reason) => {
            if (this._state === 'pending') {
                this._state = 'rejected';
                this.value = reason;
                this._onRejectedCallbacks.forEach((callback) => {
                    callback(this.value);
                });
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        return new MPromise((resolve, reject) => {
            const handleFulfilled = (value) => {
                try {
                    if (typeof onFulfilled === 'function') {
                        const result = onFulfilled(value);
                        if (result instanceof MPromise) {
                            return result.then(resolve, reject);
                        } else {
                            resolve(result);
                        }
                    } else {
                        resolve(value);
                    }
                } catch (error) {
                    reject(error);
                }
            };

            const handleRejected = (reason) => {
                try {
                    if (typeof onRejected === 'function') {
                        const result = onRejected(reason);
                        if (result instanceof MPromise) {
                            return result.then(resolve, reject);
                        } else {
                            resolve(result);
                        }
                    } else {
                        reject(reason);
                    }
                } catch (error) {
                    reject(error);
                }
            };

            if (this._state === 'pending') {
                this._onFulfilledCallbacks.push(handleFulfilled);
                this._onRejectedCallbacks.push(handleRejected);
            } else if (this._state === 'fulfilled') {
                handleFulfilled(this.value);
            } else if (this._state === 'rejected') {
                handleRejected(this.value);
            }
        });
    }
    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        return new MPromise((resolve) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new MPromise((resolve, reject) => {
            reject(reason);
        });
    }

    static all(values) {
        if (Array.isArray(values)) return;

        return new MPromise((resolve, reject) => {
            let completed = 0;
            const results = [];
            values.forEach((value, i) => {
                MPromise.resolve(value)
                    .then((result) => {
                        results[i] = result;
                        completed += 1;
                        if (completed === values.length) resolve(results);
                    })
                    .catch((reason) => reject(reason));
            });
        });
    }

    static race(values) {
        return new MPromise((resolve, reject) => {
            for (const value of values) {
                MPromise.resolve(value)
                    .then((result) => resolve(result))
                    .catch(reject);
            }
        });
    }
}

class MyPromise {
    constructor(executor) {
        this._state = 'pending';
        this._value = undefined;
        this._onFulfilledCallbacks = [];
        this._onRejectedCallbacks = [];

        function resolve(value) {
            if (this._state === 'pending') {
                this._state = 'fulfilled';
                this._value = value;
                this._onFulfilledCallbacks.forEach((cb) => cb(value));
            }
        }
        function reject(reason) {
            if (this._state === 'pending') {
                this._state = 'rejected';
                this._value = reason;
                this._onRejectedCallbacks.forEach((cb) => cb(value));
            }
        }

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        return new MPromise((resolve, reject) => {
            function handleFulfilled(value) {
                try {
                    if (typeof onFulfilled === 'function') {
                        const result = onFulfilled(value);
                        if (result instanceof MPromise) {
                            return result.then(resolve, reject);
                        } else {
                            resolve(result);
                        }
                    } else {
                        resolve(value);
                    }
                } catch (error) {
                    reject(error);
                }
            }

            function handleRejected(reason) {
                try {
                    if (typeof onRejected === 'function') {
                        const result = onRejected(reason);
                        if (result instanceof MPromise) {
                            return result.then(resolve, reject);
                        } else {
                            resolve(result);
                        }
                    } else {
                        reject(reason);
                    }
                } catch (error) {
                    reject(error);
                }
            }

            if (this._state === 'pending') {
                this._onFulfilledCallbacks.push(handleFulfilled);
                this._onRejectedCallbacks.push(handleRejected);
            } else if (this._state === 'fulfilled') {
                handleFulfilled(this._value);
            } else if (this._state === 'rejected') {
                handleRejected(this._value);
            }
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        return new MPromise((resolve, reject) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason);
        });
    }

    all(values) {
        return new MPromise((resolve, reject) => {
            let completed = 0;
            const results = [];

            for (let i = 0; i < values.length; i++) {
                values[i]
                    .then((result) => {
                        results[i] = result;
                        completed += 1;

                        if (completed >= values.length) {
                            resolve(results);
                        }
                    })
                    .catch(reject);
            }
        });
    }

    race(values) {
        return new MPromise((resolve, reject) => {
            for (let value of values) {
                MyPromise.resolve(value).then(resolve).catch(reject);
            }
        });
    }
}
