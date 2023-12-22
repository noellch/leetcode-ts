/* 
https://leetcode.com/problems/maximum-subsequence-score/description/
*/

/* ------------------------------------------------------------------------------- */

class MinHeap {
    data: number[];
    constructor() {
        this.data = [];
    }

    insert(val: number) {
        this.data.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.data.length - 1;
        const ele = this.data[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parentEle = this.data[parentIdx];
            if (parentEle <= ele) break;

            this.data[parentIdx] = ele;
            this.data[idx] = parentEle;
            idx = parentIdx;
        }
    }

    extractMin() {
        const last = this.data.pop() as number;
        const min = this.data[0];

        if (this.data.length > 0) {
            this.data[0] = last;
            this.sinkDown();
        }

        return min;
    }

    sinkDown() {
        let idx = 0;
        const ele = this.data[idx];
        const len = this.data.length;

        while (true) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let leftChild: number | null = null;
            let rightChild: number | null = null;
            let swap: number | null = null;

            if (leftIdx < len) {
                leftChild = this.data[leftIdx];
                if (ele > leftChild) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < len) {
                rightChild = this.data[rightIdx];
                if ((swap === null && ele > rightChild) || (swap !== null && rightChild < (leftChild as number))) {
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

function maxScore(nums1: number[], nums2: number[], k: number): number {
    const pairs = nums1
        .map((num, idx) => {
            return [num, nums2[idx]];
        })
        .sort((a, b) => b[1] - a[1]);

    const minHeap = new MinHeap();
    let n1Sum = 0;
    let result = 0;

    for (const [n1, n2] of pairs) {
        n1Sum += n1;
        minHeap.insert(n1);

        if (minHeap.data.length > k) {
            const min = minHeap.extractMin();
            n1Sum -= min;
        }

        if (minHeap.data.length === k) {
            result = Math.max(result, n1Sum * n2);
        }
    }

    return result;
}

/*
T.C.: O(N * log(N))
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const nums1 = [1, 3, 3, 2],
    nums2 = [2, 1, 3, 4],
    k = 3;

console.log(maxScore(nums1, nums2, k));
