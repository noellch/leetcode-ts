/** Given the root of a binary tree, return the inorder traversal of its nodes' values.*/

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
    let data: number[] = []

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
