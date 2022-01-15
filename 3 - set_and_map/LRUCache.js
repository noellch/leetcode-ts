/* Q: Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity. */

//? 題目有說讀寫的時間複雜度必須要 O(1)。
//? 如果 put 時 cache 數量已滿，先移除 cache 內最少用到的(least recently used)項目後再添加。

class LRUCache {
    constructor(capacity) {
        this.cache = new Map()
        this.capacity = capacity
    }
}

LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) return -1

    const value = this.cache.get(key)

    // 先刪掉 Map 中該項
    this.cache.delete(key)
    // 再加回去。這樣這個 key 就會添加在 Map 的最後。
    this.cache.set(key, value)

    return value
}

LRUCache.prototype.put = function (key, value) {
    // 如果這個 key 已經存在於 Map 中，先刪掉它。這時 size 就不會等於 capacity。
    if (this.cache.has(key)) this.cache.delete(key)

    // 若 Map 內的項目到達最大值，則刪除最不常用的項目。
    // 也因為每次使用都會將當下的項目重新 set，放到 Map 的最後面，所以這時 Map 的第一項就是最不常用的項目。
    if (this.cache.size === this.capacity) {
        // Map.keys().next().value 可以從第一項開始拿到 Map 中的"值"。
        // ex: Map(3) { 'b' => 123, 'c' => 456, 'a' => 789 },
        // Map.keys().next().value => 123
        // Map.keys().next().value => 456
        // Map.keys().next().value => 789

        this.cache.delete(this.cache.keys().next().value)

        // 再加回去。
        this.cache.set(key, value)
    } else {
        this.cache.set(key, value)
    }
}

//* 使用 hash table 和 double-linked-list
class LRUCache {
    constructor(capacity) {
        this.count = 0
        this.capacity = capacity
        this.cache = {}
        this.head = new DLinkedNode()
        this.head.pre = null
        this.tail = new DLinkedNode()
        this.tail.next = null
        this.head.next = this.tail
        this.tail.pre = this.head
    }

    get(key) {
        const node = this.cache[key]
        if (!node) {
            return -1
        }
        this.moveToHead(node)
        return node.val
    }

    put(key, value) {
        const node = this.cache[key]
        if (!node) {
            const newNode = new DLinkedNode(key, value, null, null)
            this.cache[key] = newNode
            this.addNode(newNode)
            this.count++
            if (this.count > this.capacity) {
                const tail = this.popTail()
                delete this.cache[tail.key]
                this.count--
            }
        } else {
            node.val = value
            this.moveToHead(node)
        }
    }

    addNode(node) {
        node.pre = this.head
        node.next = this.head.next
        this.head.next.pre = node
        this.head.next = node
    }

    removeNode(node) {
        const pre = node.pre
        const next = node.next
        pre.next = next
        next.pre = pre
    }

    moveToHead(node) {
        this.removeNode(node)
        this.addNode(node)
    }

    popTail(node) {
        const pre = this.tail.pre
        this.removeNode(pre)
        return pre
    }
}

class DLinkedNode {
    constructor(key, val, pre, next) {
        this.key = key
        this.val = val
        this.pre = pre
        this.next = next
    }
}

//* if want to read in O(1), consider use map(object).
//* if want to write and remove in O(1), consider use linked list.
//* so doubly linked list for write/remove and map(object) for read.
//* Map 中的 key 會依照資料添加的時間排列，且是唯一。
