from typing import List


class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        current = []

        def dfs(idx: int, total: int):
            if total > target or idx >= len(candidates):
                return
            if total == target:
                return res.append(current.copy())
            current.append(candidates[idx])
            dfs(idx, total + candidates[idx])
            current.pop()
            dfs(idx + 1, total)

        dfs(0, 0)
        return res


"""
  T.C: O(2^t) where t = target/min(candidates)
  - Each recursive call branches into 2 paths
  (include/exclude)
  - Maximum depth limited by target value divided by
  smallest candidate
  - In worst case with candidates=[1] and large target,
  approaches O(2^target)

  S.C: O(target/min(candidates))
  - Recursion depth limited by how many times we can use
  smallest number
  - Current array stores at most target/min(candidates)
  elements
  - Result space not counted in auxiliary space analysis
"""

# Test cases
if __name__ == "__main__":
    solution = Solution()

    # Test case 1: Basic example from LeetCode
    candidates1 = [2, 3, 6, 7]
    target1 = 7
    result1 = solution.combinationSum(candidates1, target1)
    print(f"Input: candidates={candidates1}, target={target1}")
    print(f"Output: {result1}")
    print("Expected: [[2,2,3],[7]] - Can reuse 2 multiple times")
    print()

    # Test case 2: Multiple ways to reach target
    candidates2 = [2, 3, 5]
    target2 = 8
    result2 = solution.combinationSum(candidates2, target2)
    print(f"Input: candidates={candidates2}, target={target2}")
    print(f"Output: {result2}")
    print("Expected: [[2,2,2,2],[2,3,3],[3,5]] - Various combinations")
    print()

    # Test case 3: Single element array
    candidates3 = [2]
    target3 = 1
    result3 = solution.combinationSum(candidates3, target3)
    print(f"Input: candidates={candidates3}, target={target3}")
    print(f"Output: {result3}")
    print("Expected: [] - Impossible to reach target")
    print()

    # Test case 4: Exact match with single number
    candidates4 = [1]
    target4 = 1
    result4 = solution.combinationSum(candidates4, target4)
    print(f"Input: candidates={candidates4}, target={target4}")
    print(f"Output: {result4}")
    print("Expected: [[1]] - Single element solution")
    print()

    # Test case 5: Large target requiring repetition
    candidates5 = [3, 5, 4]
    target5 = 8
    result5 = solution.combinationSum(candidates5, target5)
    print(f"Input: candidates={candidates5}, target={target5}")
    print(f"Output: {result5}")
    print("Expected: [[3,5],[4,4]] - Shows repeated usage")
    print()

    # Test case 6: Edge case - target 1 with various candidates
    candidates6 = [2, 3, 4, 7]
    target6 = 1
    result6 = solution.combinationSum(candidates6, target6)
    print(f"Input: candidates={candidates6}, target={target6}")
    print(f"Output: {result6}")
    print("Expected: [] - All candidates > target")
    print()
