/* 
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.
*/

/* ------------------------------------------------------------------------------- */

// class LRUCache {
//     cache: Map<number, number>;

//     constructor(readonly capacity: number) {
//         this.cache = new Map();
//         this.capacity = capacity;
//     }

//     get(key: number) {
//         if (!this.cache.has(key)) return -1;
//         const value = this.cache.get(key);
//         this.cache.delete(key);
//         this.cache.set(key, value!);
//         return value;
//     }

//     put(key: number, value: number) {
//         if (this.cache.has(key)) this.cache.delete(key);

//         if (this.capacity === this.cache.size) {
//             this.cache.delete(this.cache.keys().next().value);
//             // Map.keys().next().value 可以從第一項開始拿到 Map 中的"值"。
//             // ex: Map(3) { 'b' => 123, 'c' => 456, 'a' => 789 },
//             // Map.keys().next().value => 123
//             // Map.keys().next().value => 456
//             // Map.keys().next().value => 789
//         }
//         this.cache.set(key, value);
//     }
// }

/*
T.C.: O(1) for both get and put
S.C.: O(capacity)
*/

/* ------------------------------------------------------------------------------- */

class LinkedListNode {
    constructor(
        public key?: number,
        public value?: number,
        public prev?: LinkedListNode | null,
        public next?: LinkedListNode | null
    ) {
        this.key = key ?? 0;
        this.value = value ?? 0;
        this.prev = prev ?? null;
        this.next = next ?? null;
    }
}

class LRUCache {
    cache: Map<number, LinkedListNode>;
    head: LinkedListNode;
    tail: LinkedListNode;

    constructor(readonly capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();

        // doubly linked list :
        // left head side is the least recently used element
        // right head side is the most recently used element
        this.head = new LinkedListNode(0, 0);
        this.tail = new LinkedListNode(0, 0);
        this.head.prev = null;
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.tail.next = null;
    }

    // remove node from the doubly linked list
    remove(node: LinkedListNode) {
        const prev = node.prev;
        const next = node.next;

        (prev as LinkedListNode).next = next;
        (next as LinkedListNode).prev = prev;
    }

    // insert node to the end before tail of the doubly linked list
    insert(node: LinkedListNode) {
        node.prev = this.tail.prev as LinkedListNode;
        node.next = this.tail as LinkedListNode;
        (this.tail.prev as LinkedListNode).next = node;
        this.tail.prev = node;
    }

    get(key: number): number {
        const node = this.cache.get(key);
        if (node) {
            this.remove(node);
            this.insert(node);
            return node.value as number;
        }

        return -1;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.remove(node!);
        }
        const newNode = new LinkedListNode(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.capacity < this.cache.size) {
            const lru = this.head.next;
            this.remove(lru!);
            this.cache.delete(lru?.key as number);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * if want to read in O(1), consider use map(object).
 * if want to write and remove in O(1), consider use linked list.
 * so doubly linked list for write/remove and map(object) for read.
 * Map 中的 key 會依照資料添加的時間排列，且是唯一。
 */

/*
T.C.: O(1) for both get and put
S.C.: O(capacity)
*/

/* ------------------------------------------------------------------------------- */
