/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
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

function inorderTraversal(root: TreeNode | null): number[] {
    const data: number[] = []

    if (root) {
        let current = root

        function traversal(node: TreeNode | null) {
            if (node.left) traversal(node.left)
            data.push(node.val)
            if (node.right) traversal(node.right)
        }
        traversal(current)
    }

    return data
}
