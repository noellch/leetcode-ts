class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const node = new Node(val);
        if (this.first === null) {
            this.last = node;
            this.first = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    dequeue() {
        if (this.first === null) return null;
        if (this.first === this.last) this.last = null;

        const temp = this.first;
        this.first = this.first.next;
        this.size--;

        return temp.val;
    }
}
