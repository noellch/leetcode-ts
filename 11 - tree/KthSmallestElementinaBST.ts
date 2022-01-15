/** Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree. */

//? Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

//Definition for a binary tree node.
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

// function kthSmallest(root: TreeNode | null, k: number): number {
//     let node = root
//     const data: Array<number> = []

//     ;(function dfs(node: TreeNode): void {
//         node.left && dfs(node.left)
//         data.push(node.val)
//         node.right && dfs(node.right)
//     })(node)

//     return data[k - 1]
// }

/**
 *
 * 'dfs in-order' approach traverse all the node in order and make the value an array.
 *  Afterward, get the index k-th - 1 of the value array.
 *
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    const stack: TreeNode[] = []

    while (true) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if (--k === 0) return root.val
        root = root.right
    }
}

/**
 * 使用 in-order 的順序確認第 k 個值。這個方法不需要遍歷整個 tree，找到第 k 個最小值後直接 return。
 *
 */
