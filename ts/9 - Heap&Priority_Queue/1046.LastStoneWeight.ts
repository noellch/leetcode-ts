/* 
https://leetcode.com/problems/last-stone-weight/description/
*/

/* ------------------------------------------------------------------------------- */

class MaxHeap {
    data: number[];
    constructor() {
        this.data = [];
    }

    insert(value: number) {
        this.data.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.data.length - 1;
        let ele = this.data[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentEle = this.data[parentIdx];

            if (ele <= parentEle) break;

            this.data[parentIdx] = ele;
            this.data[idx] = parentEle;
            idx = parentIdx;
        }
    }

    extractMax() {
        const result = this.data[0];
        const last = this.data.pop() as number;

        if (this.data.length > 0) {
            this.data[0] = last;
            this.sinkDown();
        }

        return result;
    }

    sinkDown() {
        let idx = 0;
        let ele = this.data[idx];
        let len = this.data.length;

        while (true) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let leftChild: number | null = null;
            let rightChild: number | null = null;
            let swap: number | null = null;

            if (leftIdx < len) {
                leftChild = this.data[leftIdx];
                if (leftChild > ele) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < len) {
                rightChild = this.data[rightIdx];
                if ((swap === null && rightChild > ele) || (swap !== null && rightChild > (leftChild as number))) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;

            this.data[idx] = this.data[swap];
            this.data[swap] = ele;
            idx = swap;
        }
    }
}

function lastStoneWeight(stones: number[]): number {
    const heap = new MaxHeap();
    // N * log(N)
    stones.forEach((s) => heap.insert(s));

    while (heap.data.length > 1) {
        const x = heap.extractMax();
        const y = heap.extractMax();
        // log(N)
        heap.insert(Math.abs(x - y));
    }

    return heap.data[0] ?? 0;
}

/*
T.C.: O(N * log(N))
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const stones = [2, 7, 4, 1, 8, 1];

console.log(lastStoneWeight(stones));
