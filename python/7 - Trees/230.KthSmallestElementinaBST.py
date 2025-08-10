from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# class Solution:
#     def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
#         res = []

#         def dfs(node: TreeNode | None):
#             if node.left:
#                 dfs(node.left)
#             res.append(node.val)
#             if node.right:
#                 dfs(node.right)

#         dfs(root)

#         return res[k - 1]


"""
此演算法利用中序遍歷將 BST 轉為有序陣列，直接取得第 k 小元素。

T.C.: O(N)
 1. 需遍歷整棵樹的所有 N 個節點。
 2. 每個節點僅訪問一次，操作為 O(1)。
 3. 最終回傳第 k 小元素為 O(1)。

S.C.: O(N)
 1. 需用一個長度為 N 的列表儲存所有節點值。
 2. 遞迴呼叫堆疊最壞情況下為 O(N)（樹極度不平衡時）。
 3. 主要空間消耗來自於儲存節點值的列表。
"""


class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        n = 0
        stack = []
        cur = root
        while True:
            while cur:
                stack.append(cur)
                cur = cur.left

            node = stack.pop()
            n += 1
            if n == k:
                return node.val

            cur = node.right


"""
此演算法利用迭代式中序遍歷，直接在遍歷過程中找到第 K 小元素，無需儲存所有節點值。

T.C.: O(N)
 1. 需遍歷最多 N 個節點，直到找到第 K 小元素為止。
 2. 每個節點最多進棧與出棧各一次，操作為 O(1)。
 3. 最壞情況下需遍歷整棵樹。

S.C.: O(H)
 1. 只需用一個堆疊儲存當前路徑上的節點，最大深度為樹高 H。
 2. 不需額外儲存所有節點值，空間消耗較低。
 3. 最壞情況下（極度不平衡樹）H 可能等於 N。
 """
