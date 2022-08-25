/* 
Binary tree
定義：
- 每個 node 最多只能有兩個 child node。即分支度小於等於 2。
- 是一個有限集合。每個 node 的左子樹（Left Sub-tree）跟右子樹（Right Sub-tree）互不交集。
- 每一個 node 都不重複。
- perfect binary tree
- skewed tree
*/

/* 
Binary search tree
定義：
- 每個 node 最多只會有兩個 child node。
- 所有 node 的值都不重複。
- 若 node 的 left Sub-tree 存在，所有 left Sub-tree 的值必小於 node 的值。
- 若 node 的 Right Sub-tree 存在，所有 Right Sub-tree 的值必大於 node 的值。
*/

/* ------------------------------------------------------------------------------- */
/* 
node 會有自己的值，以及與左右兩邊 child node 的連結。
*/

class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
// /* ------------------------------------------------------------------------------- */

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert_iteration(val) {
        const node = new Node(val);

        if (!this.root) {
            this.root = node;
            return this;
        }

        let current = this.root;

        while (current) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (!current.left) {
                    current.left = node;
                    return this;
                }

                current = current.left;
            } else {
                if (!current.right) {
                    current.right = node;
                    return this;
                }

                current = current.right;
            }
        }
    }

    insert_recursion(val) {
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }

        let current = this.root;
        this.insertHelper(val, current);

        return this;
    }

    insertHelper(val, current) {
        if (!current) return;
        if (val === current.val) return undefined;
        if (val < current.val) {
            return current.left ? this.insertHelper(val, current.left) : (current.left = new Node(val));
        } else {
            return current.right ? this.insertHelper(val, current.right) : (current.right = new Node(val));
        }
    }

    find_iteration(val) {
        if (!this.root) return undefined;

        let current = this.root;

        while (current) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                return current;
            }
        }
        return undefined;
    }

    find_recursion(val) {
        if (!this.root) return undefined;

        let current = this.root;

        return this.findHelper(val, current);
    }

    findHelper(val, current) {
        if (!current) return undefined;
        if (val < current.val) {
            return this.findHelper(val, current.left);
        } else if (val > current.val) {
            return this.findHelper(val, current.right);
        } else {
            return current;
        }
    }

    BFS() {
        let node = this.root;
        const queue = [node];
        const data = [];

        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    DFS_pre_order() {
        const data = [];

        let current = this.root;
        const traverse = (node) => {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        };

        traverse(current);
        return data;
    }

    DFS_in_order() {
        const data = [];

        let current = this.root;
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        };

        traverse(current);
        return data;
    }

    DFS_post_order() {
        const data = [];

        let current = this.root;
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        };

        traverse(current);
        return data;
    }
}

// const tree = new BinarySearchTree();
// tree.insert_iteration(10);
// tree.insert_iteration(18);
// tree.insert_iteration(12);
// tree.insert_iteration(110);
// tree.insert_iteration(9);
// tree.insert_iteration(1);
// tree.insert_iteration(43);
// tree.insert_iteration(128);

// const data1 = tree.BFS();
// const data2 = tree.DFS_pre_order();
// const data3 = tree.DFS_in_order();
// const data4 = tree.DFS_post_order();

/* 
    10
  9     18
1     12  110
        43   128
*/

/*
T.C.: 
Insertion - O(log n) or O(n)
Removal - O(log n) or O(n)
Searching - O(log n) or O(n)
Access - O(log n) or O(n)
*/
