from typing import List

# recursion
# class Solution:
#     def subsets(self, nums: List[int]) -> List[List[int]]:
#         subset = []
#         res = []

#         def dfs(idx: int):
#             if idx >= len(nums):
#                 return res.append(subset.copy())
#             subset.append(nums[idx])
#             dfs(idx + 1)
#             subset.pop()
#             dfs(idx + 1)

#         dfs(0)
#         return res


"""
T.C: O(N × 2^N)
- Total subsets generated: 2^N (each element has 2 choices)
- Copying subset at each leaf: O(N) time using subset.copy()
- Total operations: 2^N subsets × N copying time = O(N × 2^N)
- Recursive calls: 2^N total calls, each doing O(1) work except copying

S.C: O(N)
- Recursion call stack depth: O(N) maximum depth
- Temporary subset list: O(N) maximum size when all elements included
- Output space not counted in auxiliary space complexity
- No additional data structures beyond the recursive stack and subset
"""


# iteration
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = [[]]

        for num in nums:
            res += [subset + [num] for subset in res]

        return res


"""
  T.C: O(n × 2^n)
  - Outer loop runs n times (for each number)
  - At iteration i, we have 2^i existing subsets
  - Each iteration creates 2^i new subsets by copying and
  extending
  - Total operations: Σ(i=0 to n-1) 2^i = 2^n - 1 ≈ O(2^n)
  - Each subset creation involves list concatenation:
  O(average subset length) = O(n)
  - Overall: O(n × 2^n)

  S.C: O(2^n)
  - Result stores 2^n subsets
  - Each subset averages n/2 elements
  - Auxiliary space for list comprehension: O(2^i) at
  iteration i
  - Overall dominated by result storage: O(2^n)
"""


# Test cases
if __name__ == "__main__":
    solution = Solution()

    # Test case 1: Basic example
    nums1 = [1, 2, 3]
    result1 = solution.subsets(nums1)
    print(f"Input: {nums1}")
    print(f"Output: {result1}")
    print("Expected: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]")
    print()

    # Test case 2: Single element
    nums2 = [0]
    result2 = solution.subsets(nums2)
    print(f"Input: {nums2}")
    print(f"Output: {result2}")
    print("Expected: [[], [0]]")
    print()

    # Test case 3: Two elements
    nums3 = [1, 2]
    result3 = solution.subsets(nums3)
    print(f"Input: {nums3}")
    print(f"Output: {result3}")
    print("Expected: [[], [1], [2], [1,2]]")
    print()

    # Test case 4: Larger array
    nums4 = [1, 2, 3, 4]
    result4 = solution.subsets(nums4)
    print(f"Input: {nums4}")
    print(f"Output length: {len(result4)} (should be 16)")
    print("First few subsets:", result4[:8])
