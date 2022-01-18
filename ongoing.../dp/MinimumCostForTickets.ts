/** You have planned some train traveling one year in advance. The days of the year in which you will travel are given as an integer array days. Each day is an integer from 1 to 365.

Train tickets are sold in three different ways:

a 1-day pass is sold for costs[0] dollars,
a 7-day pass is sold for costs[1] dollars, and
a 30-day pass is sold for costs[2] dollars.
The passes allow that many days of consecutive travel.

For example, if we get a 7-day pass on day 2, then we can travel for 7 days: 2, 3, 4, 5, 6, 7, and 8.
Return the minimum number of dollars you need to travel every day in the given list of days. */

function mincostTickets(days: number[], costs: number[]): number {
    const dp: number[] = Array(days.length + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i <= days.length; i++) {
        dp[i] = Math.min(dp[i], dp[i - 1] + costs[0])

        for (let j = 1; j <= i; j++) {
            if (days[j - 1] + 7 > days[i - 1]) {
                dp[i] = Math.min(dp[i], dp[j - 1] + costs[1])
            }

            if (days[j - 1] + 30 > days[i - 1]) {
                dp[i] = Math.min(dp[i], dp[j - 1] + costs[2])
            }
        }
    }

    return dp.pop()!
}

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31],
    costs = [2, 7, 15]

console.log(mincostTickets(days, costs))
