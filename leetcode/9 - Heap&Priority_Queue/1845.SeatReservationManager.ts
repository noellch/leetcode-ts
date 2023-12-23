/* 
https://leetcode.com/problems/seat-reservation-manager/description/
*/

/* ------------------------------------------------------------------------------- */

class MinHeap {
    data: number[];
    constructor(seats: number) {
        this.data = Array(seats)
            .fill(0)
            .map((_, i) => i + 1);
    }

    insert(val: number) {
        this.data.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.data.length - 1;
        let ele = this.data[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentEle = this.data[parentIdx];

            if (parentEle <= ele) break;

            this.data[idx] = parentEle;
            this.data[parentIdx] = ele;
            idx = parentIdx;
        }
    }

    extractMin() {
        const min = this.data[0];
        const last = this.data.pop() as number;
        if (this.data.length > 0) {
            this.data[0] = last;
            this.sinkDown();
        }

        return min;
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

class SeatManager {
    seats: number[];
    heap: MinHeap;
    constructor(n: number) {
        this.heap = new MinHeap(n);
        this.seats = this.heap.data;
    }

    /*
    T.C.: O(log(N))
    */

    reserve(): number {
        return this.heap.extractMin();
    }

    /*
    T.C.: O(log(N))
    */

    unreserve(seatNumber: number): void {
        this.heap.insert(seatNumber);
    }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */

/* ------------------------------------------------------------------------------- */

const seatManager = new SeatManager(5);
seatManager.reserve();
