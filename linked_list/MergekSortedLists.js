/* Q: You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

//* brute force solution
var mergeKLists = function (lists) {
    const mergedList = []
    let list
    for (let i = 0; i < lists.length; i++) {
        list = lists[i]
        while (list) {
            mergedList.push(list)
            list = list.next
        }
    }

    mergedList.sort((a, b) => a.val - b.val)

    for (let j = 0; j < mergedList.length; j++) {
        mergedList[j].next = mergedList[j + 1] || null
    }

    return mergedList[0] || null
}

//* 將 lists 內 k 個 list 中的所有 node 都拿出來放進一個新的 array。
//* 用每個 node 的值 去 sort 這個 array。
//* 將這個 array 中的 node 重新組成一個新的 list。
//* Time complexity : O(NlogN) where NN is the total number of nodes.
//*S pace complexity : O(N).

//* compare one by one solution
var mergeKLists = function (lists) {
    // 新的 list
    const mergedList = new ListNode(0)
    // c 負責連接接下來的 node
    let c = mergedList

    // lists 中出現最小值 list 的 index。最後用來讓這個 list = list.next。
    let minListIdx = 0
    // 當下的出現最小值的 list 的 head。
    let min = null

    while (true) {
        // 每次都先初始化最小值為 null
        min = null

        // 遍歷每一個 list。
        for (let i = 0; i < lists.length; i++) {
            // 當下的 list[i] 還有東西才進行比較。
            // 將 min 動態調整為值最小的 head。
            // 若 min 為 null，先讓它等於 lists[i] 存在的 list 的 head。
            if (lists[i] && (!min || lists[i].val <= min.val)) {
                min = lists[i]
                // minListIdx 動態調整為出現最小值 list 的 index。
                minListIdx = i
            }
        }
        // 若最小值的 node 存在。
        if (min) {
            c.next = min
            // 推進 c
            c = c.next

            // 將最小值出現的 list 往前推進，這樣才不會每次都比較到重複的值。
            lists[minListIdx] = lists[minListIdx].next
            // 若沒有最小值出現，表示已經比較完畢。跳出迴圈。
        } else break
    }

    return mergedList.next
}

//* 一對一個別比較，較小的就放進新的 list。
//* Time complexity : O(kN) where k is the number of linked lists.
//* Space complexity : O(n).

//* merge lists one by one solution
var mergeKLists = function (lists) {
    let mergedList = null

    for (let i = 0; i < lists.length; i++) {
        mergedList = merge(mergedList, lists[i])
    }

    return mergedList
}

const merge = (a, b) => {
    if (!a) return b
    if (!b) return a

    const newList = new ListNode(0)
    let c = newList

    while (a && b) {
        if (a.val < b.val) {
            c.next = a
            a = a.next
        } else {
            c.next = b
            b = b.next
        }

        c = c.next
    }

    c.next = a ? a : b

    return newList.next
}

//* 依次合併各個 list，可參考 Merge Two Sorted Lists。
//* Time complexity : O(kN)O(kN) where \text{k}k is the number of linked lists.
//* Space complexity : O(1)O(1)

//* merge with divide and conquer solution
var mergeKLists = function (lists) {
    if (!lists.length) return null

    // base case。若 lists 長度等於 1，return。
    if (lists.length <= 1) return lists[0]

    // 不斷將 lists 從中點切分成左右。
    let mid = Math.floor(lists.length / 2)
    let left = mergeKLists(lists.slice(0, mid))
    let right = mergeKLists(lists.slice(mid))
    // 碰到 base case 後，左右開始 merge。
    return merge(left, right)
}

const merge = (a, b) => {
    if (!a) return b
    if (!b) return a

    const newList = new ListNode(0)
    let c = newList

    while (a && b) {
        if (a.val < b.val) {
            c.next = a
            a = a.next
        } else {
            c.next = b
            b = b.next
        }

        c = c.next
    }

    c.next = a ? a : b

    return newList.next
}

//* 用到 merge sort 的觀念
//* 將 lists 不斷拆分至 長度等於 1，再兩兩 merge 回去。
//* Time complexity : O(Nlogk) where k is the number of linked lists.
//* Space complexity : O(1)O(1)
