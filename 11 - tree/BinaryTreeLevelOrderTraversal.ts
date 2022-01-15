/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * (i.e., from left to right, level by level).
 */

// definition for a binary tree node.
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

var levelOrder = function (root: TreeNode | null): number[][] {
    const result = []
    const queue = []
    let levelNodes: number
    let temp: Array<number>
    let currentNode: TreeNode

    if (!root) return []

    queue.push(root)
    while (queue.length !== 0) {
        levelNodes = queue.length
        temp = []
        for (let i = 0; i < levelNodes; i++) {
            currentNode = queue.shift()
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
            temp.push(currentNode.val)
        }
        result.push(temp)
    }
    return result
}
