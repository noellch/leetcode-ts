class BinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12, X]
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (element <= parent) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return max
    }

    sinkDown() {
        let idx = 0
        let element = this.values[idx]
        const len = this.values.length

        while (true) {
            let leftIdx = idx * 2 + 1
            let rightIdx = idx * 2 + 2
            let leftChild, rightChild
            let swap = null

            if (leftIdx < len) {
                leftChild = this.values[leftIdx]
                if (leftChild > element) {
                    swap = leftIdx
                }
            }

            if (rightIdx < len) {
                rightChild = this.values[rightIdx]
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
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

heap.extractMax()

console.log(heap)
