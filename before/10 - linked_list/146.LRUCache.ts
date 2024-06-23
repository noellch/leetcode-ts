/* Q: Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity. */

//? 題目有說讀寫的時間複雜度必須要 O(1)。
//? 如果 put 時 cache 數量已滿，先移除 cache 內最少用到的(least recently used)項目後再添加。

// hash table and double-linked-list
// class DListNode {
//     constructor(public key?: number, public val?: number, public pre?: DListNode | null, public next?: DListNode | null) {
//         this.key = key ?? 0
//         this.val = val ?? 0
//         this.pre = pre === undefined ? null : pre
//         this.next = next === undefined ? null : next
//     }
// }

// class LRUCache {
//     cache: Map<number, DListNode>
//     head: DListNode | null
//     tail: DListNode | null

//     constructor(public capacity: number) {
//         // the key point to the node
//         this.cache = new Map()
//         this.capacity = capacity

//         // doubly linked list :
//         // left head side is the least recently used element
//         // right head side is the most recently used element
//         this.head = new DListNode()
//         this.tail = new DListNode()
//         this.head.pre = null
//         this.head.next = this.tail
//         this.tail.next = null
//         this.tail.pre = this.head
//     }

//     // remove node from the doubly linked list
//     remove(node: DListNode) {
//         const pre = node.pre
//         const next = node.next
//         pre!.next = next
//         next!.pre = pre
//     }

//     // insert node to the end before tail of the doubly linked list
//     insert(node: DListNode) {
//         node.next = this.tail
//         node.pre = this.tail!.pre
//         this.tail!.pre!.next = node
//         this.tail!.pre = node
//     }

//     get(key: number): number {
//         // 若 cache 存在 key 則直接返回 key 指向的 node 的值
//         // 並且移除在 list 中的 key 對應的 node，往 list 的最右手邊插入
//         // 因為 list 最右手邊的 node，是最近使用過的
//         if (this.cache.has(key)) {
//             const node = this.cache.get(key) as DListNode
//             this.remove(node)
//             this.insert(node)

//             return node.val as number
//         }

//         // 若 key 不存在於 cache
//         return -1
//     }

//     put(key: number, value: number): void {
//         // 如果 key 存在於 cache，則先將 對應的 node 從 list 中移除
//         if (this.cache.has(key)) this.remove(this.cache.get(key) as DListNode)

//         // 設定 key-val pair
//         this.cache.set(key, new DListNode(key, value))
//         // 將 node 插入 list 的最右手邊
//         this.insert(this.cache.get(key) as DListNode)

//         // 如果 cache 內的值已經超過一開始定義的 capacity
//         if (this.cache.size > this.capacity) {
//             // lru 為最左手邊的 node，也就是最少被使用過的元素
//             const lru = this.head!.next as DListNode
//             // 移除它
//             this.remove(lru)
//             // 並同步將它從 cache 中移除
//             this.cache.delete(lru.key as number)
//         }
//     }
// }

/**
 * if want to read in O(1), consider use map(object).
 * if want to write and remove in O(1), consider use linked list.
 * so doubly linked list for write/remove and map(object) for read.
 * Map 中的 key 會依照資料添加的時間排列，且是唯一。
 */

// use Map
// class LRUCache {
//     cache: Map<number, number>

//     constructor(public capacity: number) {
//         this.cache = new Map()
//         this.capacity = capacity
//     }
// }

// LRUCache.prototype.get = function (key) {
//     if (!this.cache.has(key)) return -1

//     const value = this.cache.get(key)

//     // 先刪掉 Map 中該項
//     this.cache.delete(key)
//     // 再加回去。這樣這個 key 就會添加在 Map 的最後。
//     this.cache.set(key, value)

//     return value
// }

// LRUCache.prototype.put = function (key, value) {
//     // 如果這個 key 已經存在於 Map 中，先刪掉它。這時 size 就不會等於 capacity。
//     if (this.cache.has(key)) this.cache.delete(key)

//     // 若 Map 內的項目到達最大值，則刪除最不常用的項目。
//     // 也因為每次使用都會將當下的項目重新 set，放到 Map 的最後面，所以這時 Map 的第一項就是最不常用的項目。
//     if (this.cache.size === this.capacity) {
//         // Map.keys().next().value 可以從第一項開始拿到 Map 中的"值"。
//         // ex: Map(3) { 'b' => 123, 'c' => 456, 'a' => 789 },
//         // Map.keys().next().value => 123
//         // Map.keys().next().value => 456
//         // Map.keys().next().value => 789

//         this.cache.delete(this.cache.keys().next().value)

//         // 再加回去。
//         this.cache.set(key, value)
//     } else {
//         this.cache.set(key, value)
//     }
// }

class DListNode {
    constructor(
        public key?: number,
        public value?: number,
        public pre?: DListNode | null,
        public next?: DListNode | null
    ) {
        this.key = key ?? 0;
        this.value = value ?? 0;
        this.pre = pre ?? null;
        this.next = next ?? null;
    }
}

class LRUCache {
    capacity: number;
    cache: Map<number, DListNode>;
    head: DListNode | null;
    tail: DListNode | null;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
        this.tail = new DListNode();
        this.head = new DListNode();

        this.tail.next = null;
        this.tail.pre = this.head;
        this.head.pre = null;
        this.head.next = this.tail;
    }

    insert(node: DListNode) {
        node.pre = this.tail?.pre;
        node.next = this.tail;
        this.tail!.pre!.next = node;
        this.tail!.pre = node;
    }

    remove(node: DListNode) {
        const pre = node.pre;
        const next = node.next;
        pre!.next = next;
        next!.pre = pre;
    }

    get(key: number) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key) as DListNode;
            this.remove(node);
            this.insert(node);

            return node.value;
        }

        return -1;
    }

    put(key: number, value: number) {
        if (this.cache.has(key)) this.remove(this.cache.get(key) as DListNode);

        this.cache.set(key, new DListNode(key, value));
        this.insert(this.cache.get(key) as DListNode);

        if (this.cache.size > this.capacity) {
            const lru = this.head?.next as DListNode;
            this.remove(lru);
            this.cache.delete(lru.key as number);
        }
    }
}
