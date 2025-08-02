# Definition for a QuadTree node.
from typing import List


class Node:
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight


# class Solution:
#     def construct(self, grid: List[List[int]]) -> 'Node':
#         def dfs(n: int, r: int, c: int) -> Node:
#             isAllSame = True
#             for i in range(n):
#                 for j in range(n):
#                     if grid[r][c] != grid[r + i][c + j]:
#                         isAllSame = False
#                         break

#             if isAllSame:
#                 return Node(grid[r][c], True, None, None, None, None)

#             n = n // 2
#             topLeft = dfs(n, r, c)
#             topRight = dfs(n, r, c + n)
#             bottomLeft = dfs(n, r + n, c)
#             bottomRight = dfs(n, r + n, c + n)
#             return Node(0, False, topLeft, topRight, bottomLeft, bottomRight)
#         return dfs(len(grid), 0, 0)

"""
T.C.: O(N^2log(N))
這裡的時間複雜度 O(n² log n) 來自於「每一層遞迴都要檢查一個 n x n 的區塊」，而且總共有 log n 層。

 1. 每層遞迴的工作量
在原始寫法中，每次呼叫 dfs 時，會用兩層 for 迴圈檢查這個 n x n 區塊是不是全部一樣。這個檢查需要 O(n²) 時間。
 2. 遞迴分割
如果不是 leaf node，會把這個區塊分成四個 n/2 x n/2 的子區塊，對每個子區塊再遞迴呼叫一次。
 3. 遞迴關係式
所以總的時間複雜度 T(n) 可以寫成：￼這是典型的分治遞迴（Divide and Conquer）。
 4. 主定理（Master Theorem），是一個用來分析分治遞迴時間複雜度的數學工具。
 T(n) = a * T(n/b) + O(n^d)
 其中：
 • a：每次分成幾個子問題
 • n/b：每個子問題的規模
 • O(n^d)：每層合併或分割時所需的額外工作量

主定理的三種情況 ￼
 1. 如果 a < b^d
T(n) = O(n^d)
 2. 如果 a = b^d
T(n) = O(n^d log n)
 3. 如果 a > b^d
T(n) = O(n^{log_b a})

舉例來說，a=4, b=2, d=2：
T(n) = 4 * T(n/2) + O(n^2)
 ▫ a = 4（每次分成 4 個子問題）
 ▫ b = 2（每個子問題的規模是原來的一半）
 ▫ d = 2（合併時的工作量是 O(n²)）
根據主定理，T(n) = O(n² log n)。

S.C.: O(N^2)
"""


class Solution:
    def construct(self, grid: List[List[int]]) -> "Node":
        def dfs(n: int, r: int, c: int) -> Node:
            if n == 1:
                return Node(grid[r][c], True, None, None, None, None)

            n = n // 2
            topLeft = dfs(n, r, c)
            topRight = dfs(n, r, c + n)
            bottomLeft = dfs(n, r + n, c)
            bottomRight = dfs(n, r + n, c + n)

            if (
                topLeft.isLeaf
                and topRight.isLeaf
                and bottomLeft.isLeaf
                and bottomRight.isLeaf
                and topLeft.val == topRight.val == bottomLeft.val == bottomRight.val
            ):
                return Node(topLeft.val, True, None, None, None, None)

            return Node(0, False, topLeft, topRight, bottomLeft, bottomRight)

        return dfs(len(grid), 0, 0)


"""
T.C.: O(N^2)
這個解法的時間複雜度是 O(n²)，因為每個格子只會被遞迴拜訪一次。

 • 這個遞迴函式會把網格不斷分成四個區塊，直到每個 cell 都成為 leaf node。
 • 沒有在每一層用 for 迴圈掃描整個子區塊。
 • 每個 cell 只會被處理一次（建立 leaf node 或合併）。
 • 所以總共的操作次數就是格子的數量：O(n²)。

S.C.: O(N^2)
"""
