/**
 *Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, 
 construct and return the binary tree.
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length || !inorder.length) return null

    // 將 preorder 的第一位做為 root
    const root = new TreeNode(preorder[0])
    // 找出這個 root 在 inorder 中的哪個位置，判斷左右兩邊的 subtree
    const mid = inorder.indexOf(preorder[0])

    // 建構 root.left 以及 root.right
    // 並將 preorder 和 inorder 縮減成屬於各自的部分
    // inorder 很好理解的是將 mid 作為中心，切成左右兩邊作為 subtree 的 inorder
    // preorder 可以理解為， mid 是tree 的中心，所以 mid 的數字就等於左半邊的 subtree 用了多少個 node
    // 左半邊的 preorder 就為 slice(1, mid + 1)，從 1 開始是因為最前面那位作為 root 了
    // 右半邊的 preorder 為 mid+1 一直到最後一位
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

    return root
}

/**
 * preorder traversal 會由 root 開頭；而這個 root 又可將 inorder traversal 分成左右兩邊的 subtree。
 * ex: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
 * 3 是整個 tree 最頂端的 root，並可將 inorder 分成 [9] 以及 [15, 20, 7]。
 * 而 preorder[1] 是 inorder 左邊 subtree 的 root；preorder[2] 是 inorder 右邊 subtree 的 root。
 * 以上可歸納出一個系統，不斷新增左右兩邊的 root 後再將 subtree 分割成更小的左右 subtree。
 * 最後返回重建後的 root。
 */

const preorder = [3, 9, 20, 15, 7],
    inorder = [9, 3, 15, 20, 7]
