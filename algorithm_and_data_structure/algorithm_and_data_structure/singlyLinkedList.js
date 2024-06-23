class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    unshift(val) {
        const node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return undefined;

        const currentHead = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        let counter = 0;

        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, val) {
        const foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;
            return true;
        } else {
            return false;
        }
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length - 1) return !!this.push(val);

        const node = new Node(val);
        const prev = this.get(index - 1);
        node.next = prev.next;
        prev.next = node;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.shift(val);
        if (index === this.length - 1) return this.pop(val);

        const prev = this.get(index - 1);
        const removed = prev.next;
        prev.next = removed.next;
        this.length--;

        return removed;
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let prev = null;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return this;
    }
}
