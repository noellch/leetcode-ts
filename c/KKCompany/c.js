function solution(A, B, S) {
    if (A.length > S || B.length > S) return false;
    const set = new Set();

    function backtracking(i) {
        if (i === A.length) return true;

        if (!set.has(A[i])) {
            set.add(A[i]);
            if (backtracking(i + 1)) return true;
            set.delete(A[i]);
        }

        if (!set.has(B[i])) {
            set.add(B[i]);
            if (backtracking(i + 1)) return true;
            set.delete(B[i]);
        }

        return false;
    }

    return backtracking(0);
}

const A = [1, 1, 3];
const B = [2, 2, 1];
const S = 3;

console.log(solution([2, 5, 6, 5], [5, 4, 2, 2], 8));
