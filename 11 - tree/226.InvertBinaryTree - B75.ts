/** Given the root of a binary tree, invert the tree, and return its root. */

// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

// dfs
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null
    let node = root

    const temp = node.left
    node.left = node.right
    node.right = temp

    invertTree(node.left)
    invertTree(node.right)

    return root
}

//bfs
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null

    let node = root
    const queue: TreeNode[] = [node]

    while (queue.length) {
        node = queue.shift()
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)

        const temp = node.left
        node.left = node.right
        node.right = temp
    }

    return root
}
