# Definition for a binary tree node.
from collections import deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# DFS
# class Solution:
#     def goodNodes(self, root: TreeNode) -> int:
#         if not root:
#             return 0

#         def dfs(node: TreeNode, maxVal: int):
#             if not node:
#                 return 0
#             good = 1 if node.val >= maxVal else 0
#             maxVal = max(maxVal, node.val)
#             return dfs(node.left, maxVal) + dfs(node.right, maxVal) + good
#         return dfs(root, root.val)


"""
T.C.: O(N)
時間複雜度是 O(N)，其中 N 是樹的節點數。

 • 這個遞迴（DFS）會「拜訪每一個節點一次」。
 • 每個節點只會被處理一次（判斷是不是 good node、更新 maxVal、遞迴左右子樹）。
 • 在每個節點上的操作（比較、加總）都是 O(1) 時間。

所以，總共的時間複雜度就是 O(N)，N 為二元樹的節點數。

S.C.: O(H)
空間複雜度是 O(H)，其中 H 是樹的高度。

 • 遞迴函式會使用「遞迴堆疊」來儲存函式呼叫的資訊。
 • 在最壞的情況下（樹是線性的），遞迴深度會是 O(N)。
 • 在最好的情況下（樹是平衡的），遞迴深度會是 O(log N)。
 • 所以，空間複雜度是 O(H)，H 為樹的高度。
"""


# BFS
class Solution:
    def goodNodes(self, root: TreeNode) -> int:

        count = 0
        if not root:
            return count

        q = deque([(root, root.val)])

        while q:
            node, maxVal = q.popleft()
            if node.val >= maxVal:
                count += 1
            maxVal = max(maxVal, node.val)
            if node.left:
                q.append((node.left, maxVal))
            if node.right:
                q.append((node.right, maxVal))
        return count


"""
T.C.: O(N)
每個節點都會被放進 queue 一次、處理一次 N 是樹的節點數。
 • 每次操作（比較、加總、入隊出隊）都是 O(1)。

S.C.: O(N)
 • 主要來自 queue 的儲存。
 • 最壞情況（完全不平衡的樹或完全二元樹的最後一層），queue 可能同時存放 O(N) 個節點。
 • 另外還有 count 變數和 maxVal 這些都是 O(1)。
"""
