# Definition for a binary tree node.
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# class Solution:
#     def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
#         if not preorder or not inorder:
#             return None

#         root = TreeNode(preorder[0])
#         mid = inorder.index(preorder[0])

#         root.left = self.buildTree(preorder[1:mid + 1], inorder[:mid])
#         root.right = self.buildTree(preorder[mid + 1:], inorder[mid + 1:])

#         return root


"""
T.C.: O(N^2)
 • 每次遞迴用 inorder.index() 查找根節點，最壞 O(N)。
 • 每個節點都會被遞迴一次，共 O(N) 次。
 • 總時間複雜度 O(N) × O(N) = O(N^2)。

S.C.: O(N^2)
 • 輸入空間：preorder、inorder 各 O(N)。
 • 輔助空間：每層遞迴切片產生新陣列，最壞 O(N^2)。
 • 總空間複雜度 O(N^2)。
"""


class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        preIdx = inIdx = 0

        def dfs(limit):
            nonlocal preIdx, inIdx
            if preIdx >= len(preorder):
                return None
            if inorder[inIdx] == limit:
                inIdx += 1
                return None

            root = TreeNode(preorder[preIdx])
            preIdx += 1
            root.left = dfs(root.val)
            root.right = dfs(limit)
            return root

        return dfs(float("inf"))


"""
T.C.: O(N)
  • 每個節點只被訪問一次
  • 兩個指針 preIdx 和 inIdx 各自只會遞增，不會回退
  • 總共 N 個節點，所以是 O(N)

S.C.:O(H)

  • H = 樹的高度
  • 主要來自遞歸調用棧
  • 最好情況（平衡樹）：O(log N)
  • 最壞情況（歪斜樹）：O(N)
"""
