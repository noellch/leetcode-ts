import collections
from typing import List, Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# class Solution:
#     def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
#         res = []

#         q = collections.deque()
#         q.append(root)

#         while q:
#             rightSide = None
#             qLen = len(q)
#             for i in range(qLen):
#                 node = q.popleft()
#                 if node:
#                     rightSide = node
#                     if node.left:
#                         q.append(node.left)
#                     if node.right:
#                         q.append(node.right)
#             if rightSide:
#                 res.append(rightSide.val)
#         return res


class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        res = []

        def dfs(node, depth):
            if not node:
                return None
            if len(res) == depth:
                res.append(node.val)
            dfs(node.right, depth + 1)
            dfs(node.left, depth + 1)

        dfs(root, 0)
        return res
