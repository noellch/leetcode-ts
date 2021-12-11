/** The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
  */

// class MedianFinder {
//     constructor() {
//         this.container = []
//     }

//     addNum(num) {
//         let container = this.container

//         if (container.length === 0) {
//             container.push(num)
//         } else bs(num)

//         function bs(num) {
//             let start = 0
//             let end = container.length
//             while (start < end) {
//                 let mid = ~~((start + end) / 2)
//                 if (num > container[mid]) start = mid + 1
//                 else end = mid
//             }
//             container.splice(start, 0, num)
//         }
//     }

//     findMedian() {
//         const container = this.container
//         let mid = ~~(container.length / 2)
//         return container.length % 2 !== 0 ? container[mid] : (container[mid] + container[mid - 1]) / 2
//     }
// }

var MedianFinder = function () {
    this.maxHeap = new Heap(Heap.maxComparator)
    this.minHeap = new Heap(Heap.minComparator)
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
        this.maxHeap.add(num)
    } else {
        this.minHeap.add(num)
    }

    if (this.maxHeap.size - this.minHeap.size > 1) {
        this.minHeap.add(this.maxHeap.poll())
    } else if (this.minHeap.size - this.maxHeap.size > 1) {
        this.maxHeap.add(this.minHeap.poll())
    }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.maxHeap.size > this.minHeap.size) {
        return this.maxHeap.peek()
    } else if (this.maxHeap.size < this.minHeap.size) {
        return this.minHeap.peek()
    } else {
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2
    }
}

/**
 *  custom Heap class
 */
class Heap {
    constructor(comparator) {
        this.size = 0
        this.values = []
        this.comparator = comparator || Heap.minComparator
    }

    add(val) {
        this.values.push(val)
        this.size++
        this.bubbleUp()
    }

    peek() {
        return this.values[0] || null
    }

    poll() {
        const max = this.values[0]
        const end = this.values.pop()
        this.size--
        if (this.values.length) {
            this.values[0] = end
            this.bubbleDown()
        }
        return max
    }

    bubbleUp() {
        let idx = this.values.length - 1
        let parentIdx = ~~((idx - 1) / 2)
        let element = this.values[idx]

        while (this.comparator(this.values[idx], this.values[parentIdx]) < 0) {
            let parent = this.values[parentIdx]
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
            parentIdx = ~~((idx - 1) / 2)
        }
    }

    bubbleDown() {
        let idx = 0
        let length = this.values.length

        while (true) {
            let element = this.values[idx]
            let left = null,
                right = null,
                swap = null,
                leftIndex = idx * 2 + 1,
                rightIndex = idx * 2 + 2

            if (leftIndex < length) {
                left = this.values[leftIndex]
                if (this.comparator(left, element) < 0) swap = leftIndex
            }

            if (rightIndex < length) {
                right = this.values[rightIndex]
                if ((swap !== null && this.comparator(right, left) < 0) || (swap === null && this.comparator(right, element))) {
                    swap = rightIndex
                }
            }
            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }

    /**
     *  Min Comparator
     */
    static minComparator = (a, b) => {
        return a - b
    }

    /**
     *  Max Comparator
     */
    static maxComparator = (a, b) => {
        return b - a
    }
}
