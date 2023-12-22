/* 
https://leetcode.com/problems/k-closest-points-to-origin/description/
*/

/* ------------------------------------------------------------------------------- */

type Point = number[];

class MinHeap {
    data: Point[];
    constructor() {
        this.data = [];
    }

    distance([x, y]: Point) {
        return x * x + y * y;
    }

    insert(value: Point) {
        this.data.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.data.length - 1;
        let ele = this.data[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentEle = this.data[parentIdx];

            if (this.distance(ele) >= this.distance(parentEle)) break;

            this.data[parentIdx] = ele;
            this.data[idx] = parentEle;
            idx = parentIdx;
        }
    }

    extractMin() {
        const result = this.data[0];

        if (this.data.length > 1) {
            let last = this.data.pop() as Point;
            this.data[0] = last;
            this.sinkDown();
        }

        return result;
    }

    sinkDown() {
        let idx = 0;
        let ele = this.data[0];
        let len = this.data.length;

        while (true) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let leftChild: Point | null = null;
            let rightChild: Point | null = null;
            let swap: number | null = null;

            if (leftIdx < len) {
                leftChild = this.data[leftIdx];
                if (this.distance(ele) > this.distance(leftChild)) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < len) {
                rightChild = this.data[rightIdx];
                if (
                    (swap === null && this.distance(ele) > this.distance(rightChild)) ||
                    (swap !== null && this.distance(rightChild) < this.distance(leftChild as Point))
                ) {
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

function kClosest(points: number[][], k: number): number[][] {
    const result: number[][] = [];
    const heap = new MinHeap();
    /* T.C.: O(N * log(N)) */
    points.forEach((point) => heap.insert(point));

    /* T.C.: O(K * log(N)) */
    while (k--) {
        result.push(heap.extractMin());
    }

    return result;
}

/*
T.C.: O(K * log(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const points = [
    [68, 97],
    [34, -84],
    [60, 100],
    [2, 31],
    [-27, -38],
    [-73, -74],
    [-55, -39],
    [62, 91],
    [62, 92],
    [-57, -67],
];
console.log(kClosest(points, 5));

// [[2,31],[-27,-38],[-55,-39],[-57,-67],[34,-84]]
