/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

/* ------------------------------------------------------------------------------- */

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

// function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
//     let current = root;

//     if (current && p && q && current?.val > p?.val && current?.val > q?.val) {
//         return lowestCommonAncestor(root?.left || null, p, q);
//     }
//     if (current && p && q && current?.val < p?.val && current?.val < q?.val) {
//         return lowestCommonAncestor(root?.right || null, p, q);
//     }

//     return root;
// }

/* ------------------------------------------------------------------------------- */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let current = root

  while (current && p && q) {
    if (current.val > p.val && current.val > q.val) {
      current = current.left
    } else if (current.val < p.val && current.val < q.val) {
      current = current.right
    } else return current
  }

  return root
}

/**
 * 如果 root.val 沒有比 p 和 q 的值大或小，表示 p 或 q 本身的值就是等於 root.val
 * 或是 p.val < root.val && root.val < q.val，這時 root 就是 p、q 的 lowest ancestor
 */

/*
T.C.: O(log(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
