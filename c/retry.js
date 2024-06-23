const retry = (fn, times) => {
    return new Promise((resolve, reject) => {
        const retryFn = (retryTimes) => {
            fn()
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    if (retryTimes >= times) {
                        reject(error);
                    } else {
                        console.log('retry');
                        retryFn(retryTimes + 1);
                    }
                });
        };
        retryFn(0);
    });
};

const ajaxFn = () => {
    const n = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => (n > 0.7 ? resolve(n) : reject(n)), 1000);
    });
};

retry(ajaxFn, 5)
    .then((res) => console.log('success', res))
    .catch((err) => console.log('error', err));
