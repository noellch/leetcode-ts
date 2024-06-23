// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     pop() {
//         if (!this.head) return undefined;

//         let current = this.head;
//         let newTail = current;

//         while (current.next) {
//             newTail = current;
//             current = current.next;
//         }

//         this.tail = newTail;
//         this.length--;
//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }

//     shift() {
//         let currentHead = this.head;
//         this.head = currentHead.next;
//         this.length--;
//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return currentHead;
//     }

//     unshift(val) {
//         const newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     get(index) {
//         if (index < 0 || index >= this.length) return null;
//         let counter = 0;
//         let current = this.head;
//         while (counter !== index) {
//             current = current.next;
//             counter++;
//         }

//         return current;
//     }

//     set(index, val) {
//         const foundNode = this.get(index);
//         if (foundNode) {
//             foundNode.val = val;
//             return true;
//         } else {
//             return false;
//         }
//     }

//     insert(index, val) {
//         if (index < 0 || index > this.length) return false;
//         if (index === 0) return !!this.unshift(val);
//         if (index === this.length) return !!this.push(val);

//         const newNode = new Node(val);
//         const prev = this.get(index - 1);
//         const temp = prev.next;
//         prev.next = newNode;
//         newNode.next = temp;
//         this.length++;
//         return true;
//     }

//     remove(index) {
//         if (index < 0 || index >= this.length) return undefined;
//         if (index === 0) return this.shift();
//         if (index === this.length - 1) return this.pop();

//         const prevNode = this.get(index - 1);
//         const removed = prevNode.next;
//         prevNode.next = removed.next;
//         this.length--;
//         return removed;
//     }

//     reverse() {
//         const node = this.head;
//         this.head = this.tail;
//         this.tail = node;

//         let next;
//         let prev = null;

//         for (let i = 0; i < this.length; i++) {
//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//         }
//         return this;
//     }
// }

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
            this.tail = node;
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
        let newTail = this.head;

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

    shift() {
        if (!this.head) return undefined;
        if (this.head === this.tail) this.tail = null;

        const temp = this.head;
        this.head = this.head.next;
        this.length--;
        return temp;
    }

    unshift(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let count = 0;
        let current = this.head;

        while (count !== idx) {
            current = current.next;
            count++;
        }

        return current;
    }

    set(idx, val) {
        const node = this.get(idx);
        if (node) {
        }
    }
}

const list = new SinglyLinkedList();

list.push('U');
list.push('H');
list.push('M');

console.log(list.reverse());

console.log(list);
