class BinaryHeap {
    values: number[]

    constructor() {
        this.values = [41, 39, 33, 18, 27, 12, 20]
    }

    insert(element: number): void {
        this.values.push(element)
        this.bubbleUp()
    }

    private bubbleUp() {
        let idx = this.values.length - 1
        let element = this.values[idx]

        while (idx > 0) {
            let parentIdx = ~~((idx - 1) / 2)
            let parentEle = this.values[parentIdx]
            if (element <= parentEle) break

            this.values[parentIdx] = element
            this.values[idx] = parentEle
            idx = parentIdx
        }
    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()!

        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }

        return max
    }

    sinkDown() {
        let idx = 0
        let element = this.values[idx]
        let len = this.values.length
        while (true) {
            let leftIdx = idx * 2 + 1
            let rightIdx = idx * 2 + 2
            let leftChild: number | null = null
            let rightChild: number | null = null
            let swap: number | null = null
            if (leftIdx < len) {
                leftChild = this.values[leftIdx]
                if (leftChild > element) {
                    swap = leftIdx
                }
            }
            if (rightIdx < len) {
                rightChild = this.values[rightIdx]
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild!)) {
                    swap = rightIdx
                }
            }
            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}

const heap = new BinaryHeap()

heap.insert(40)
heap.insert(30)
heap.insert(20)
heap.insert(10)
heap.extractMax()
heap.extractMax()
heap.extractMax()

console.log(heap)
