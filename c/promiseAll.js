function promiseAll(values) {
    if (!Array.isArray(values)) return;
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        values.forEach((value, index) => {
            Promise.resolve(value)
                .then((result) => {
                    results[index] = result; // 確保回傳的Promise中，value的順序是對的！
                    completed += 1;

                    //如果成功的話就會回傳resolve
                    if (completed == values.length) {
                        resolve(results);
                    }
                })
                .catch((err) => reject(err));
        });
    });
}

function PA(values) {
    if (!Array.isArray(values)) return;

    return new Promise((resolve, rejected) => {
        let completed = 0;
        const results = [];
        values.forEach((value, i) => {
            Promise.resolve(value)
                .then((result) => {
                    results[i] = result;
                    completed += 1;
                    if (values.length === completed) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    rejected(error);
                });
        });
    });
}
