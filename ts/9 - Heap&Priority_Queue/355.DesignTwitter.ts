/* 
https://leetcode.com/problems/design-twitter/description/
*/

/* ------------------------------------------------------------------------------- */

class MaxHeap {
  public data: [number, number, number, number][]
  constructor() {
    this.data = []
  }

  insert(value: [number, number, number, number]) {
    this.data.push(value)
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.data.length - 1
    let ele = this.data[idx]

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parentEle = this.data[parentIdx]

      if (ele[0] <= parentEle[0]) break

      this.data[idx] = parentEle
      this.data[parentIdx] = ele
      idx = parentIdx
    }
  }

  extractMax() {
    const max = this.data[0]
    let last = this.data.pop() as [number, number, number, number]
    if (this.data.length > 0) {
      this.data[0] = last
      this.sinkDown()
    }
    return max
  }

  sinkDown() {
    let idx = 0
    let root = this.data[idx]
    let len = this.data.length

    while (true) {
      let leftIdx = idx * 2 + 1
      let rightIdx = idx * 2 + 2
      let leftChild: [number, number, number, number] | null = null
      let rightChild: [number, number, number, number] | null = null
      let swap: number | null = null

      if (leftIdx < len) {
        leftChild = this.data[leftIdx]
        if (leftChild[0] > root[0]) {
          swap = leftIdx
        }
      }

      if (rightIdx < len) {
        rightChild = this.data[rightIdx]
        if ((swap === null && rightChild[0] > root[0]) || (swap !== null && leftChild && rightChild[0] > leftChild[0])) {
          swap = rightIdx
        }
      }

      if (swap === null) break

      this.data[idx] = this.data[swap]
      this.data[swap] = root
      idx = swap
    }
  }
}

class Twitter {
  private followMap: Map<number, Set<number>>
  private tweetsMap: Map<number, [number, number][]>
  private count: number = 0

  constructor() {
    this.followMap = new Map()
    this.tweetsMap = new Map()
  }

  /*
    T.C.: O(1)
    */
  postTweet(userId: number, tweetId: number): void {
    if (this.tweetsMap.has(userId)) {
      this.tweetsMap.get(userId)?.push([this.count, tweetId])
    } else {
      this.tweetsMap.set(userId, [[this.count, tweetId]])
    }
    this.count++
  }

  /*
    T.C.: heapify + extractMax = (K * log(K)) + O(10 * log(K)) 
    K stands for the followees of the given user id
    */
  getNewsFeed(userId: number): number[] {
    const result: number[] = []
    const minHeap: [number, number, number, number][] = []

    this.followMap.set(userId, (this.followMap.get(userId) ?? new Set<number>())?.add(userId))
    for (const followeeId of this.followMap.get(userId) as Set<number>) {
      if (this.tweetsMap.has(followeeId)) {
        const tweets = this.tweetsMap.get(followeeId)
        if (tweets && tweets.length > 0) {
          let idx = tweets.length - 1
          const [count, tweetId] = tweets[idx]
          minHeap.push([count, tweetId, followeeId, idx - 1])
        }
      }
    }
    const heap = new MaxHeap()
    minHeap.forEach((tweet) => heap.insert(tweet))
    while (heap.data.length > 0 && result.length < 10) {
      const [, tweetId, followeeId, idx] = heap.extractMax()

      result.push(tweetId)
      if (idx >= 0) {
        const [count, tweetId] = (this.tweetsMap.get(followeeId) as [number, number][])[idx]
        heap.insert([count, tweetId, followeeId, idx - 1])
      }
    }

    return result
  }

  /* 是一種「懶惰求值」(lazy evaluation) 的優化，只在需要時才載入更多數據，這在大規模系統中是常見的優化策略。 */

  /*
    T.C.: O(1)
    */
  follow(followerId: number, followeeId: number): void {
    if (this.followMap.has(followerId)) {
      this.followMap.get(followerId)?.add(followeeId)
    } else {
      this.followMap.set(followerId, new Set([followeeId]))
    }
  }

  /*
    T.C.: O(1)
    */
  unfollow(followerId: number, followeeId: number): void {
    if (this.followMap.has(followerId)) {
      this.followMap.get(followerId)?.delete(followeeId)
    }
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

/* ------------------------------------------------------------------------------- */

const twitter = new Twitter()
twitter.postTweet(1, 1)
twitter.postTweet(1, 2)
twitter.postTweet(1, 3)
twitter.postTweet(9, 4)
twitter.postTweet(9, 5)
twitter.postTweet(9, 6)
twitter.postTweet(1, 8)
twitter.postTweet(1, 7)
twitter.follow(1, 9)

console.log(twitter.getNewsFeed(1))

// heap.insert([0, 1 ,1,])
