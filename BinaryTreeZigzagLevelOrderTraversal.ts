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
    const data: Array<number[]> = []
    const queue: TreeNode[] = [root]
    let deep = 0

    while (queue.length) {
        let levelLen = queue.length
        const l: number[] = []

        for (let i = 0; i < levelLen; i++) {
            const node = queue.shift()

            if (deep % 2 === 0) l.push(node.val)
            else l.unshift(node.val)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        data.push(l)
        deep++
    }

    return data
}
