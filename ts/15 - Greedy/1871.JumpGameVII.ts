/* 
https://leetcode.com/problems/jump-game-vii/description/
*/

/* ------------------------------------------------------------------------------- */

// BFS
function canReach(s: string, minJump: number, maxJump: number): boolean {
    const queue = [0];
    let farthest = 0;

    while (queue.length) {
        const n = queue.shift() as number;
        const start = Math.max(n + minJump, farthest + 1);
        const end = Math.min(n + maxJump, s.length - 1);

        for (let i = start; i <= end; i++) {
            if (s[i] === '0') {
                if (i === s.length - 1) return true;
                queue.push(i);
            }
        }
        farthest = n + maxJump;
    }

    return false;
}

/* 
跳躍到達的目標可能會重複，所以必須記錄每一個 index 能跳躍到的最遠 index(farthest)，
下一輪的起點為 farthest + 1 或 n + minJump 的最大值。
*/

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const s = '011010',
    minJump = 2,
    maxJump = 3;
console.log(canReach(s, minJump, maxJump));
