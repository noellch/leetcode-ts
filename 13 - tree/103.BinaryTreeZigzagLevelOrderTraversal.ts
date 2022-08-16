/** Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return []

    let node = root
    const data: number[][] = []
    const queue: TreeNode[] = [node]
    let deep = 0

    while (queue.length) {
        const level: number[] = []
        let levelLen = queue.length

        while (levelLen-- > 0) {
            node = queue.shift()

            if (deep % 2 === 0) level.push(node.val)
            else level.unshift(node.val)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        data.push(level)
        deep++
    }

    return data
}
