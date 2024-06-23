class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (element.priority >= parent.priority) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    dequeue() {
        const min = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return min
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
                if (leftChild.priority < element.priority) {
                    swap = leftIdx
                }
            }

            if (rightIdx < len) {
                rightChild = this.values[rightIdx]
                if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
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

class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

const th = new PriorityQueue()

th.enqueue('gmemw', 2)
th.enqueue('lnnwlfkef', 1)
th.enqueue('skvsmvfpqo', 3)
th.enqueue('oifhohp', 5)
th.enqueue('vsdnvslk', 4)

th.enqueue('wflmewl', 2)

const iff = th.dequeue()
console.log(iff)
console.log(th)
