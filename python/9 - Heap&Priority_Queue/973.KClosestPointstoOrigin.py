import heapq
from typing import List

# class Solution:
#     def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
#         points.sort(key=lambda p: p[0]**2 + p[1]**2)
#         return points[:k]


# class Solution:
#     def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
#         minHeap = []
#         for x, y in points:
#             dist = (x ** 2) + (y ** 2)
#             minHeap.append([dist, x, y])

#         heapq.heapify(minHeap)
#         res = []
#         while k > 0:
#             dist, x, y = heapq.heappop(minHeap)
#             res.append([x, y])
#             k -= 1
#         return res


"""
  T.C.：O(n log n)
  - 遍歷所有點計算距離：O(n)
  - heapify 操作：O(n)
  - 取出 k 個最小元素：O(k log n)
  - 總體：O(n + n + k log n) = O(n + k log n)，在最壞情況下當 k = n
  時為 O(n log n)

  S.C.:(n)
  - minHeap 存儲所有 n 個點的距離和坐標：O(n)
  - res 結果數組最多存儲 k 個點：O(k)
  - 總體：O(n + k) = O(n)
"""


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        maxHeap = []
        for x, y in points:
            dist = -(x**2 + y**2)
            heapq.heappush(maxHeap, [dist, x, y])
            if len(maxHeap) > k:
                heapq.heappop(maxHeap)

        res = []
        while maxHeap:
            dist, x, y = heapq.heappop(maxHeap)
            res.append([x, y])
        return res


"""
  T.C.:(n log k)
  - 遍歷所有 n 個點：O(n)
  - 每個點執行 heappush：O(log k)
  - 當 heap 大小超過 k 時執行 heappop：O(log k)
  - 最後取出 k 個結果：O(k log k)
  - 總體：O(n log k + k log k) = O(n log k)

  S.C.:(k)
  - maxHeap 最多維護 k 個元素：O(k)
  - res 結果數組存儲 k 個點：O(k)
  - 總體：O(k)

  這個解法比前面的 Min Heap 解法更優化，特別是當 k << n
  時，時間複雜度從 O(n log n) 降到 O(n log k)，空間複雜度從 O(n) 降到
  O(k)。
"""
