/** You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
    int val;
    Node *left;
    Node *right;
    Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 */

class treeNode {
    val: number
    left: treeNode | null
    right: treeNode | null
    next: treeNode | null
    constructor(val?: number, left?: treeNode, right?: treeNode, next?: treeNode) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
        this.next = next === undefined ? null : next
    }
}

// BFS solution
/* function connect(root: treeNode | null): treeNode | null {
    if (!root) return null

    const queue: treeNode[] = [root]
    // 當下在 tree 的第幾層
    let level = 0
    // 每一層的 node 個數，最少為 1
    let levelCount = 1
    // 當下處理到該層的第幾個 node
    let count = 1

    while (queue.length) {
        let node = queue.shift()

        if (count !== levelCount) {
            // 若當下處理的不是該層的最右邊的 node，將目前的 node.next 指向該層的下一個 node
            node.next = queue[0]
            count++
        } else {
            node.next = null
            // 下一層
            level++
            // 計算下一層共有多少個 node
            count = 1
            levelCount = Math.pow(2, level)
        }
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }

    return root
} */

// DFS solution
function connect(root: treeNode | null): treeNode | null {
    // return case
    if (!root || !root.left) return root

    if (root.left) root.left.next = root.right
    if (root.right) root.right.next = root.next ? root.next.left : null

    connect(root.left)
    connect(root.right)

    return root
}

/**
 * 因為題目是給定一個 perfect binary tree，所以基本上一個節點一定會有左右兩個子節點。
 * 故左節點的 next 可直接指向同層的右節點。
 * 右節點則先判斷父節點的 next 是否指向 null。
 * 若不是，則將 next 指向父節點的 next 的左節點。
 * 若是，則直接指向 null。
 *
 */
