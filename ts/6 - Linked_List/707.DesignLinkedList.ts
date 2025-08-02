/* 
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
*/

/* ------------------------------------------------------------------------------- */

class LinkedNode {
    next: LinkedNode | null;
    prev: LinkedNode | null;
    constructor(public value: number, prev?: LinkedNode | null, next?: LinkedNode | null) {
        this.value = value;
        this.next = next ?? null;
        this.prev = prev ?? null;
    }
}

class MyLinkedList {
    left: LinkedNode;
    right: LinkedNode;
    constructor() {
        this.left = new LinkedNode(0);
        this.right = new LinkedNode(0);

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    get(index: number): number {
        let current = this.left.next;

        while (current && index > 0) {
            current = current.next;
            index -= 1;
        }

        if (current && current.next !== null && index === 0) {
            return current.value;
        }

        return -1;
    }

    addAtHead(val: number): void {
        const node = new LinkedNode(val);
        const next = this.left.next as LinkedNode;

        this.left.next = node;
        next.prev = node;
        node.prev = this.left;
        node.next = next;
    }

    addAtTail(val: number): void {
        const node = new LinkedNode(val);
        const prev = this.right.prev as LinkedNode;

        this.right.prev = node;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
    }

    addAtIndex(index: number, val: number): void {
        const node = new LinkedNode(val);
        let current = this.left.next;

        while (current && index > 0) {
            current = current.next;
            index -= 1;
        }

        if (current && index === 0) {
            let prev = current.prev as LinkedNode;

            prev.next = node;
            current.prev = node;
            node.prev = prev;
            node.next = current;
        }
    }

    deleteAtIndex(index: number): void {
        let current = this.left.next;

        while (current && index > 0) {
            current = current.next;
            index -= 1;
        }

        if (current && current.next !== null && index === 0) {
            let prev = current.prev as LinkedNode;
            let next = current.next as LinkedNode;

            next.prev = prev;
            prev.next = next;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

/* ------------------------------------------------------------------------------- */
