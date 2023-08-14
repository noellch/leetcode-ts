/* 
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
*/

/* ------------------------------------------------------------------------------- */
// class MedianFinder {
//     container: Array<number>;

//     constructor() {
//         this.container = [];
//     }

//     addNum(num: number): void {
//         let container = this.container;

//         if (container.length === 0) {
//             container.push(num);
//         } else bs(num);

//         function bs(num: number): void {
//             let start = 0;
//             let end = container.length;
//             while (start < end) {
//                 let mid = ~~((start + end) / 2);
//                 if (num > container[mid]) start = mid + 1;
//                 else end = mid;
//             }
//             container.splice(start, 0, num);
//         }
//     }

//     findMedian(): number {
//         const container = this.container;
//         let mid = ~~(container.length / 2);
//         return container.length % 2 !== 0 ? container[mid] : (container[mid] + container[mid - 1]) / 2;
//     }
// }
/* ------------------------------------------------------------------------------- */

class MaxHeap {
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
        let ele = this.data[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentEle = this.data[parentIdx];

            if (parentEle >= ele) break;

            this.data[idx] = parentEle;
            this.data[parentIdx] = ele;
            idx = parentIdx;
        }
    }

    extractMax() {
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

/* ------------------------------------------------------------------------------- */

class MedianFinder {
    maxHeap: MaxHeap;
    minHeap: MinHeap;
    constructor() {
        this.maxHeap = new MaxHeap();
        this.minHeap = new MinHeap();
    }

    /*
    T.C.: O(log(N))
    S.C.: O(N)
    */
    addNum(num: number): void {
        this.maxHeap.insert(num);

        if (
            this.maxHeap.data.length !== 0 &&
            this.minHeap.data.length !== 0 &&
            this.maxHeap.data[0] > this.minHeap.data[0]
        ) {
            const val = this.maxHeap.extractMax();
            this.minHeap.insert(val);
        }

        if (this.maxHeap.data.length > this.minHeap.data.length + 1) {
            const val = this.maxHeap.extractMax();
            this.minHeap.insert(val);
        }

        if (this.minHeap.data.length > this.maxHeap.data.length + 1) {
            const val = this.minHeap.extractMin();
            this.maxHeap.insert(val);
        }
    }

    /*
    T.C.: O(1)
    S.C.: O(1)
    */
    findMedian(): number {
        if (this.maxHeap.data.length > this.minHeap.data.length) {
            return this.maxHeap.data[0];
        }

        if (this.minHeap.data.length > this.maxHeap.data.length) {
            return this.minHeap.data[0];
        }

        return (this.maxHeap.data[0] + this.minHeap.data[0]) / 2;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

/* 
- 使用一大一小的 heap 來確保每次 addNum 時 list 都是 in-order 的。
- 獲取中位數時，只需要比較兩個 heap 的長度。中位數會依情況是兩個 heap 的最大及最小值或最大值及最小值的平均。
*/

/* ------------------------------------------------------------------------------- */

const medianFinder = new MedianFinder();

medianFinder.addNum(-1);
console.log(medianFinder.findMedian());
medianFinder.addNum(-2);
console.log(medianFinder.findMedian());
medianFinder.addNum(-3);
console.log(medianFinder.findMedian());
medianFinder.addNum(-4);
console.log(medianFinder.findMedian());
medianFinder.addNum(-5);
console.log(medianFinder.findMedian());
