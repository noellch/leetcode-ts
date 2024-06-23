class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const node = new Node(val);
        if (this.first === null) {
            this.first = node;
            this.last = node;
        } else {
            node.next = this.first;
            this.first = node;
        }

        return ++this.size;
    }

    pop() {
        if (this.first === null) return null;
        if (this.first === this.last) this.last = null;

        const temp = this.first;
        this.first = this.first.next;
        --this.size;
        return temp.val;
    }
}
