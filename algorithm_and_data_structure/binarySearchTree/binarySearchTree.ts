class Node {
    val: number;
    right: Node | null;
    left: Node | null;

    constructor(val: number) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    public insert(val: number): BinarySearchTree | undefined {
        const newNode = new Node(val);
        if (!this.root) this.root = newNode;
        let cur = this.root;
        if (val === cur.val) return undefined;

        while (true) {
            if (val < cur.val) {
                if (!cur.left) {
                    const newNode = new Node(val);
                    cur.left = newNode;
                    return this;
                }
                cur = cur.left;
            }

            if (val > cur.val) {
                if (!cur.right) {
                    const newNode = new Node(val);
                    cur.right = newNode;
                    return this;
                }
                cur = cur.right;
            }
        }
    }

    public find(val: number): Node | undefined | null {
        if (!this.root) return undefined;

        let cur: Node | undefined | null = this.root;
        let found = false;

        while (!found && cur) {
            if (val < cur.val) {
                cur = cur.left;
            } else if (val > cur.val) {
                cur = cur.right;
            } else {
                found = true;
            }
        }

        if (!found) return undefined;
        return cur;
    }

    // breadth_first_search
    BFS() {
        const data: number[] = [];
        const queue: Node[] = [];

        let node = this.root;
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    // depth_first_search_pre_order
    DFSPreOrder() {}

    // depth_first_search_post_order
    DFSPostOrder() {}

    // depth_first_search_in_order
    DFSInOrder() {}
}

const tree = new BinarySearchTree();

tree.insert(20);
tree.insert(30);
tree.insert(19);
tree.insert(2);
tree.insert(3);
tree.insert(40);
tree.insert(29);
const a = tree.find(20);
console.log('🚀 ~ file: binarySearchTree.ts ~ line 89 ~ a', a);

console.log(tree);

// console.log(tree.BFS())
// console.log(tree.DFSPreOrder())
// console.log(tree.DFSPostOrder())
// console.log(tree.DFSInOrder())
