import heapq
from collections import defaultdict
from typing import List


class Twitter:

    def __init__(self):
        self.count = 0
        self.tweetMap = defaultdict(list)
        self.followMap = defaultdict(set)

    # T.C.: O(1)
    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweetMap[userId].append([self.count, tweetId])
        self.count -= 1

    # T.C.: heapify + extractMax = (K * log(K)) + O(10 * log(K))
    # K stands for the followees of the given user id
    def getNewsFeed(self, userId: int) -> List[int]:
        minHeap = []
        self.followMap[userId].add(userId)
        for followee in self.followMap[userId]:
            if followee in self.tweetMap:
                idx = len(self.tweetMap[followee]) - 1
                count, tweetId = self.tweetMap[followee][idx]
                heapq.heappush(
                    minHeap,
                    [count, tweetId, followee, idx - 1],
                )
        res = []
        while minHeap and len(res) < 10:
            count, tweetId, followee, idx = heapq.heappop(minHeap)
            res.append(tweetId)
            if idx >= 0:
                count, tweetId = self.tweetMap[followee][idx]
                heapq.heappush(minHeap, [count, tweetId, followee, idx - 1])
        return res

    # T.C.: O(
    def follow(self, followerId: int, followeeId: int) -> None:
        self.followMap[followerId].add(followeeId)

    # T.C.: O(1)
    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId in self.followMap[followerId]:
            self.followMap[followerId].remove(followeeId)


"""
  T.C: O(1) for post/follow/unfollow, O(K log K) for
  getNewsFeed
  - postTweet: O(1) - Simple map insertion
  - follow/unfollow: O(1) - Set operations
  - getNewsFeed: O(K log K) where K = number of followees
    - Initial heap construction: O(K log K)
    - Extract max 10 times: O(10 log K)
    - Lazy loading maintains heap size ≤ K

  S.C: O(U + T + F)
  - Tweet storage: O(T) where T = total tweets
  - Follow relationships: O(F) where F = total follow
  relationships
  - Heap during news feed: O(K) where K = followees
  - Overall: O(U + T + F) where U = users
"""
