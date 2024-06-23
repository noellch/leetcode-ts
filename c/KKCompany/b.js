function solution(S) {
    if (!S) return 0;

    const set = new Set([S[0]]);
    let result = 1;

    let i = 1;

    while (i < S.length) {
        if (set.has(S[i])) {
            result++;
            set.clear();
        }

        set.add(S[i]);
        i++;
    }

    return result;
}

const S = 'abacdec';

console.log(solution(S));
