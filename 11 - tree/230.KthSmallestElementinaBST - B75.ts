/** Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree. */

//? Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

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

// solution1
function kthSmallest(root: TreeNode | null, k: number): number {
    const data: number[] = []

    let node = root

    ;(function traverse(node: TreeNode) {
        if (node.left) traverse(node.left)
        data.push(node.val)
        if (node.right) traverse(node.right)
    })(node)

    return data[k - 1]
}

// solution2
function kthSmallest(root: TreeNode | null, k: number): number {
    let n = 0
    const stack: TreeNode[] = []
    let node = root

    while (true) {
        while (node) {
            stack.push(node)
            node = node.left
        }

        node = stack.pop()
        n++

        if (n === k) return node.val

        node = node.right
    }
}

/**
 * 使用 in-order 的順序確認第 k 個值。這個方法不需要遍歷整個 tree，找到第 k 個最小值後直接 return。
 */
