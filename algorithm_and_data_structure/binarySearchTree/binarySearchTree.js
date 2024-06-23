class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(val) {
        if (!this.root) return undefined;
        let current = this.root;
        let found = false;

        while (!found && current) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    // breadth_first_search
    BFS() {
        const data = [];
        const queue = [];
        let node = this.root;

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    // depth_first_search_pre_order
    DFSPreOrder() {
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

    // depth_first_search_post_order
    DFSPostOrder() {
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

    // depth_first_search_in_order
    DFSInOrder() {
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
}

const tree = new BinarySearchTree();

tree.insert(20);
tree.insert(30);
tree.insert(19);
tree.insert(2);
tree.insert(3);
tree.insert(40);
tree.insert(29);

// console.log(tree.BFS())
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());

//     20
//  19    30
// 2     29  40
//   3
