/**
 *Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, 
 construct and return the binary tree.
 */

// solution 1
var buildTree = function (preorder, inorder) {
    const inorderTMap = new Map()

    inorder.forEach((node, i) => {
        inorderTMap.set(node, i)
    })

    return constructTree(preorder, inorderTMap, 0, 0, inorder.length - 1)

    function constructTree(preorderTrie, inorderTMap, rootCandidate, inorderTLeft, inorderTRight) {
        let nodeVal = preorderTrie[rootCandidate]
        let root = new TreeNode(nodeVal)
        let middle = inorderTMap.get(nodeVal)

        if (middle > inorderTLeft) {
            root.left = constructTree(preorder, inorderTMap, rootCandidate + 1, inorderTLeft, middle - 1)
        }

        if (middle < inorderTRight) {
            root.right = constructTree(preorder, inorderTMap, rootCandidate - inorderTLeft + middle + 1, middle + 1, inorderTRight)
        }

        return root
    }
}

// solution 2
var buildTree = function (preorder, inorder) {
    const inorderTMap = new Map()

    inorder.forEach((node, i) => {
        inorderTMap.set(node, i)
    })

    function constructTree(left, right, preorder) {
        // 若 left 大於 right，表示已經到 tree 的底部了。
        if (left > right) {
            return null
        }

        const val = preorder.shift()
        const root = new TreeNode(val)

        root.left = constructTree(left, inorderTMap.get(val) - 1, preorder)
        root.right = constructTree(inorderTMap.get(val) + 1, right, preorder)

        return root
    }

    return constructTree(0, inorder.length - 1, preorder)
}

const preorder = [3, 9, 20, 15, 7],
    inorder = [9, 3, 15, 20, 7]

/**
 * preorder traversal 會由 root 開頭；而這個 root 又可將 inorder traversal 分成左右兩邊的 subtree。
 * ex: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
 * 3 是整個 tree 最頂端的 root，並也可將 inorder 分成 [9] 以及 [15, 20, 7] 兩邊 subtree。
 * 而 preorder[1] 是 inorder 左邊 subtree 的 root；preorder[2] 是 inorder 右邊 subtree 的 root。
 * 以上可歸納出一個系統，不斷新增左右兩邊的 root 後再將 subtree 分割成更小的左右 subtree。
 * 最後返回重建後的 root。
 */
