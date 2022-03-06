/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 */

// solution1
function isValidBST(root: TreeNode | null): boolean {
    const node = []

    function traverse(root: TreeNode) {
        if (root.left) traverse(root.left)
        node.push(root.val)
        if (root.right) traverse(root.right)
    }

    traverse(root)

    for (let i = 0; i < node.length; i++) {
        if (node[i] >= node[i + 1]) return false
    }

    return true
}

/**
 * 對 root 做 inorder traverse，得到的所有值，前一個一定比後一個小，若其中一個不是就返回 false
 */

// solution2
function isValidBST(root: TreeNode | null): boolean {
    // left 跟 right 是左右 subtree 的限制

    function isValid(node: TreeNode, left: number, right: number): boolean {
        if (!node) return true

        //   5
        //3     7
        //    4   8
        // 對 5 來說，
        // 他左半邊的 subtree left 為 - Infinity，right 為 5，右半邊的 subtree left 為 5，right 為 Infinity
        // 所以左 subtree 的所有元素一定要小於 5，右 subtree 的所有元素一定要大於 5
        if (!(node.val < right) || !(node.val > left)) return false

        // 兩邊 subtree 要都返回 true 才行，不然就是 false
        // 左邊的 subtree left 不會變，但 right 要更新為當下 node 的值，右邊同理
        return isValid(node.left, left, node.val) && isValid(node.right, node.val, right)
    }

    return isValid(root, -Infinity, Infinity)
}
