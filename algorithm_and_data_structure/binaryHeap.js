class BinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(ele) {
        this.values.push(ele);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.trunc((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extraMax() {
        const max = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        let idx = 0;
        let element = this.values[idx];
        const len = this.values.length;

        while (true) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let leftChild = this.values[leftIdx];
            let rightChild = this.values[rightIdx];
            let swap = null;

            if (leftIdx < len) {
                if (leftChild > element) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < len) {
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightIdx;
                }
            }

            if (!swap) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

const bh = new BinaryHeap();

bh.insert(10);
bh.insert(100);
bh.insert(23);
bh.insert(67);
bh.insert(98);
bh.insert(75);
bh.insert(14);
bh.insert(22);

const max1 = bh.extraMax();
const max2 = bh.extraMax();
