/* 
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
*/

/* ------------------------------------------------------------------------------- */

function minEatingSpeed(piles: number[], h: number): number {
    let l = 1,
        r = Math.max(...piles),
        k = Math.floor((r + l) / 2),
        hours = 0,
        result = r;

    while (l <= r) {
        for (const pile of piles) {
            hours += Math.ceil(pile / k);
        }
        if (hours <= h) {
            result = Math.min(k, result);
            r = k - 1;
        } else l = k + 1;
        hours = 0;
        k = Math.floor((r + l) / 2);
    }

    return result;
}

/* 
k 有可能的範圍是 1 到 Max(piles)。要在這之中找到最小的 k，而這個 k 可以在 h 小時內吃完所有 piles 的 bananas。
因此題目可以簡化為在 [1, .... Max(piles)] 這個範圍中使用 Binary Search 找出最小的 k。
若用這個 k 計算出來吃光所有 bananas 的小時數小於等於 h。則表示這個 k 值有可能是我們要找的最小 k 值。
這時 l 若還未等於 r，則繼續 Binary Search；否則 k 就是我們要找的最小 k 值。
*/

/*
T.C.: O(log(Max(P) * P))
- P stands for the lengths of piles.
S.C.: O()
*/

/* ------------------------------------------------------------------------------- */

// const piles = [3, 6, 7, 11],
//     h = 8;
const piles = [30, 11, 23, 4, 20],
    h = 5;
// const piles = [30, 11, 23, 4, 20],
//     h = 6;

console.log(minEatingSpeed(piles, h));
