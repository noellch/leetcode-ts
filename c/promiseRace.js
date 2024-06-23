const PromiseRace = (values) => {
    return new Promise((resolve, reject) => {
        for (const item of values) {
            //第一個完成的會直接回傳
            Promise.resolve(item).then(resolve).catch(reject);
        }
    });
};

function PR(values) {
    return new Promise((resolve, reject) => {
        for (const value of values) {
            Promise.resolve(value).then(resolve).catch(reject);
        }
    });
}
