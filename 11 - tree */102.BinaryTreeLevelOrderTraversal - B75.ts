/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * (i.e., from left to right, level by level).
 */

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
    if (!root) return []

    const data: number[][] = []

    let node = root

    const queue: TreeNode[] = [node]

    while (queue.length) {
        let levelLen = queue.length
        const level: number[] = []

        while (levelLen-- > 0) {
            node = queue.shift()

            level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        data.push(level)
    }

    return data
}
