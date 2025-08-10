import heapq
from typing import List

# class Solution:
#     def findKthLargest(self, nums: List[int], k: int) -> int:
#         return heapq.nlargest(k, nums)[-1]


"""
  T.C.：O(n log k)
  - 內部使用 Min Heap 維護 k 個最大元素
  - 遍歷 n 個元素，每次 heappush/heappop 操作為
  O(log k)
  - 總時間：n × O(log k) = O(n log k)

  S.C.:(k)
  - 內部維護大小為 k 的 Min Heap
  - 返回包含 k 個元素的列表
  - 總空間：O(k)
"""


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        k = len(nums) - k

        def quickSelect(left: int, right: int):
            pivot = nums[right]
            swap = left
            for i in range(left, right):
                if nums[i] <= pivot:
                    nums[swap], nums[i] = nums[i], nums[swap]
                    swap += 1

            nums[swap], nums[right] = nums[right], nums[swap]

            if swap > k:
                return quickSelect(left, swap - 1)
            elif swap < k:
                return quickSelect(swap + 1, right)
            else:
                return nums[swap]

        return quickSelect(0, len(nums) - 1)


"""
  T.C.：
  - 平均情況：O(n) - 每次遞迴平均能將問題規模減半
  - 最壞情況：O(n²) - 當 pivot 總是選到最大或最小值時

  S.C.：
  - 平均情況：O(log n) - 遞迴調用棧的深度
  - 最壞情況：O(n) - 當遞迴深度達到 n 時

這比使用堆的 O(n log k) 時間複雜度在平均情況下更優，但最壞情況較差。
"""
