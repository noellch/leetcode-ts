/* 
https://leetcode.com/problems/kth-largest-element-in-a-stream/description/
*/

/* ------------------------------------------------------------------------------- */

class MinHeap {
    data: number[];

    constructor(data: number[] = []) {
        this.data = data;
    }

    /*
    T.C.: O(log(N))
    */
    insert(value: number) {
        this.data.push(value);
        this.bubbleUp();
    }

    /*
    T.C.: O(log(N))
    */
    extractMin() {
        const result = this.data[0];
        const last = this.data.pop() as number;

        if (this.data.length > 0) {
            this.data[0] = last;
            this.sinkDown();
        }

        return result;
    }

    /*
    T.C.: O(log(N))
    */
    bubbleUp() {
        let idx = this.data.length - 1;
        let ele = this.data[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            let parentEle = this.data[parentIdx];
            if (ele >= parentEle) break;

            this.data[parentIdx] = ele;
            this.data[idx] = parentEle;
            idx = parentIdx;
        }
    }

    /*
    T.C.: O(log(N))
    */
    sinkDown() {
        let idx = 0;
        let ele = this.data[idx];
        let len = this.data.length;

        while (true) {
            const leftIdx = idx * 2 + 1;
            const rightIdx = idx * 2 + 2;
            let leftChild: number | null = null;
            let rightChild: number | null = null;
            let swap: number | null = null;

            if (leftIdx < len) {
                leftChild = this.data[leftIdx];
                if (leftChild < ele) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < len) {
                rightChild = this.data[rightIdx];
                if ((swap === null && rightChild < ele) || (swap !== null && rightChild < (leftChild as number))) {
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

/* ------------------------------------------------------------------------------- */

class KthLargest {
    heap: MinHeap;
    constructor(readonly k: number, public nums: number[]) {
        this.k = k;
        this.heap = new MinHeap();

        /*
        T.C.: O(N * log(N))
        */
        nums.forEach((d) => this.heap.insert(d));

        /*
        T.C.: O((N - k) * log(N))
        */
        while (this.heap.data.length > k) {
            this.heap.extractMin();
        }
    }

    /*
    T.C.: O(log(N))
    */
    add(val: number): number {
        this.heap.insert(val);
        if (this.heap.data.length > this.k) this.heap.extractMin();
        const kthLargest = this.heap.data[0];
        return kthLargest;
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/* ------------------------------------------------------------------------------- */
