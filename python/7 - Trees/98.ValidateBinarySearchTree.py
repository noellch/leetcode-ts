# Definition for a binary tree node.
from collections import deque
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# class Solution:
#     def isValidBST(self, root: Optional[TreeNode]) -> bool:
#         if not root:
#             return True

#         def dfs(node: TreeNode | None, max: int, min: int):
#             if not node:
#                 return True
#             if node.val <= min or node.val >= max:
#                 return False
#             return dfs(node.left, node.val, min) and dfs(node.right, max, node.val)

#         return dfs(root, float("inf"), float("-inf"))


"""
T.C.: O(N)
 • 每個節點只會被拜訪一次，N 為樹的節點數。
 • 每次拜訪只做常數次比較和遞迴呼叫。

S.C.: O(N)
 • 主要來自遞迴呼叫堆疊。
 • 最壞情況（樹退化成一條鏈）：O(N)
 • 平衡樹時，遞迴深度為 O(logN)
"""


class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True

        q = deque([(root, float("-inf"), float("inf"))])

        while q:
            node, min, max = q.popleft()
            if node.val <= min or node.val >= max:
                return False
            if node.left:
                q.append((node.left, min, node.val))
            if node.right:
                q.append((node.right, node.val, max))
        return True


"""
T.C.: O(N)
 • 每個節點只會被放進 queue 一次、處理一次，N 為樹的節點數。
 • 每次操作（比較、入隊、出隊）都是 O(1)。

S.C.: O(N)
 • 主要來自 queue（佇列）的儲存。
 • 最壞情況（完全不平衡的樹或完全二元樹的最後一層），queue 可能同時存放 O(N) 個節點。
"""
