const table = {
    minus: '-',
    plus: '+',
};

function solution(S) {
    let i = 0;
    const result = [];

    while (i < S.length) {
        const plus = S.substring(i, i + 4);

        if (plus in table) {
            result.push(table[plus]);
            i = i + 4;
        }
        const minus = S.substring(i, i + 5);
        if (minus in table) {
            result.push(table[minus]);
            i = i + 5;
        }
    }

    return result.join('');
}

const S = 'plusminusminusplus';
console.log(solution(S));
