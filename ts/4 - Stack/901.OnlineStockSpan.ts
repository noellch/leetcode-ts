/* 
https://leetcode.com/problems/online-stock-span/description/
 */

/* ------------------------------------------------------------------------------- */

// monotonic decreasing stack problem
class StockSpanner {
    stack: [number, number][]; // [price, span];

    constructor() {
        this.stack = [];
    }

    next(price: number): number {
        let span = 1;
        while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
            const [, prevSpan] = this.stack.pop() as [number, number];
            span += prevSpan;
        }
        this.stack.push([price, span]);
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */
