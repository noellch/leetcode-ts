import heapq
from typing import List


class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        for i, task in enumerate(tasks):
            task.append(i)
        tasks.sort(key=lambda task: task[0])

        i, time = 0, tasks[0][0]
        res = []
        minHeap = []

        while minHeap or i < len(tasks):
            while i < len(tasks) and time >= tasks[i][0]:
                heapq.heappush(
                    minHeap, [tasks[i][1], tasks[i][2]]
                )  # [processingTime, originalIndex]
                i += 1
            if not minHeap:
                time = tasks[i][0]
                continue
            processTime, idx = heapq.heappop(minHeap)
            time += processTime
            res.append(idx)

        return res


"""
T.C: O(n log n)
- Initial sorting: O(n log n) where n is number of tasks
- Main loop: Each task pushed/popped once from heap, O(n log n) total
- While loops are amortized - each task processed exactly once
- Overall dominated by sorting and heap operations

S.C: O(n)
- Modified tasks array: O(n) for adding original indices
- Min-heap storage: O(n) worst case when all tasks available simultaneously
- Result array: O(n) for storing execution order
- No additional significant space usage
"""

# Test cases
if __name__ == "__main__":
    solution = Solution()

    # Test case 1: Basic example from LeetCode
    tasks1 = [[1, 2], [2, 4], [3, 2], [4, 1]]
    result1 = solution.getOrder(tasks1)
    print(f"Input: {tasks1}")
    print(f"Output: {result1}")
    print("Expected: [0,2,3,1]")
    print(
        "Explanation: CPU starts at time 1, processes task 0 (ends at 3), then task 2 (ends at 5), then task 3 (ends at 6), finally task 1 (ends at 10)"
    )
    print()

    # Test case 2: All tasks available at time 0
    tasks2 = [[0, 3], [0, 1], [0, 2]]
    result2 = solution.getOrder(tasks2)
    print(f"Input: {tasks2}")
    print(f"Output: {result2}")
    print("Expected: [1,2,0] (shortest processing time first)")
    print()

    # Test case 3: CPU idle time scenario
    tasks3 = [[1, 2], [5, 3], [6, 1]]
    result3 = solution.getOrder(tasks3)
    print(f"Input: {tasks3}")
    print(f"Output: {result3}")
    print("Expected: [0,2,1]")
    print("Explanation: Task 0 at time 1-3, CPU idle 3-5, then tasks 2,1")
    print()

    # Test case 4: Same processing time (index tiebreaker)
    tasks4 = [[0, 2], [0, 2], [1, 1]]
    result4 = solution.getOrder(tasks4)
    print(f"Input: {tasks4}")
    print(f"Output: {result4}")
    print("Expected: [0,1,2] or [2,0,1] depending on timing")
    print()

    # Test case 5: Single task
    tasks5 = [[5, 10]]
    result5 = solution.getOrder(tasks5)
    print(f"Input: {tasks5}")
    print(f"Output: {result5}")
    print("Expected: [0]")
    print()
