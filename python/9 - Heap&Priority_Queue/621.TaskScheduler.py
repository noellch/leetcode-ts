import heapq
from collections import Counter, deque
from typing import List

# max heap and priority queue
# class Solution:
#     def leastInterval(self, tasks: List[str], n: int) -> int:
#         count = Counter(tasks)
#         maxHeap = [-cnt for cnt in count.values()]
#         heapq.heapify(maxHeap)

#         q = deque()
#         time = 0

#         while maxHeap or q:
#             time += 1
#             if maxHeap:
#                 cnt = 1 + heapq.heappop(maxHeap)
#                 if cnt:
#                     q.append([cnt, time + n])

#             if q and q[0][1] == time:
#                 heapq.heappush(maxHeap, q.popleft()[0])

#         return time


"""
T.C.：O(n)
  - Counter(tasks)：O(m) 統計每個任務出現次數
  - heapify(maxHeap)：O(k) 其中 k ≤ 26 (不同任務種類)
  - while 循環：最多執行 O(m) 次 (總時間單位)
  - 每次循環中的堆操作：O(log k)
  - O(m + k log k) ≈ O(m) (因為 k ≤ 26 是常數)

  m is the number of tasks.

S.C.：O(k) ≈ O(1)
  - Counter：O(k) 儲存不同任務的計數
  - maxHeap：O(k) 儲存任務計數
  - deque：O(k) 最多存 k 個等待中的任務
  - O(k) ≈ O(1) (k ≤ 26)
"""


# math
# class Solution:
#     def leastInterval(self, tasks: List[str], n: int) -> int:
#         count = [0] * 26
#         for task in tasks:
#             count[ord(task) - ord('A')] += 1

#         maxT = max(count)
#         maxCount = 0

#         for i in count:
#             if i == maxT:
#                 maxCount += 1

#         time = (maxT - 1) * (n + 1) + maxCount
#         return max(time, len(tasks))


"""
T.C.：O(n)
  - 遍歷 tasks 統計：O(n)
  - max(count)：O(26) = O(1)
  - 遍歷 count 計算 maxCount：O(26) = O(1)
  - O(n)

S.C：O(1)
  - count 陣列：O(26) = O(1) 固定大小
  - 其他變數：O(1)
  - O(1)
"""


# greedy
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count = [0] * 26

        for task in tasks:
            count[ord(task) - ord("A")] += 1

        count.sort()
        maxT = count[25]
        idles = (maxT - 1) * n

        for i in range(24, -1, -1):
            if count[i] == maxT:
                idles -= count[i] - 1
            else:
                idles -= count[i]

        return max(0, idles) + len(tasks)


"""
T.C.：O(n)
  - 遍歷 tasks 陣列計算頻次：O(n)
  - 排序固定大小的陣列 count[26]：O(26 log 26) = O(1)
  - 遍歷 count 陣列：O(26) = O(1)
  - O(n)

S.C.(1)
  - count 陣列固定大小 26：O(26) = O(1)
  - 其他變數都是常數空間：O(1)
  - O(1)
"""
