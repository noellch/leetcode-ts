/* 
https://leetcode.com/problems/restore-ip-addresses/description/
*/

/* ------------------------------------------------------------------------------- */

function restoreIpAddresses(s: string): string[] {
    const result: string[] = [];

    if (s.length > 12) return result;

    function backtrack(idx: number, dots: number, currentIP: string) {
        if (dots > 4) return;
        if (dots === 4 && idx === s.length) {
            result.push(currentIP.substring(0, currentIP.length - 1));
            return;
        }

        for (let j = idx; j < Math.min(idx + 3, s.length); j++) {
            if (+s.substring(idx, j + 1) <= 255 && (idx === j || s[idx] !== '0')) {
                backtrack(j + 1, dots + 1, currentIP + s.substring(idx, j + 1) + '.');
            }
        }
    }

    backtrack(0, 0, '');

    return result;
}

/*
T.C.: O(3^N) 
It is O(3^4) in worst case, cause the max height is 5. 
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const s = '25525511135';

console.log(restoreIpAddresses(s));
