/* Q: Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

 */

var deleteNode = function (node) {
    node.val = node.next.val
    node.next = node.next.next
    this.length--
}

//* node 1 (val:1)-> node 2 (val:2) -> node 3 (val:3) -> node 4 (val:4) -> node 5 (val:5)
//* delete node 3。
//* 1. Cause get directly access to node 3, make value of node 3 to the value of node 4
//* node 1 (val:1)-> node 2 (val:2) -> node 3 (val:4) -> node 4 (val:4) -> node 5 (val:5)
//* 2. Make the next node of node 3 to node 4's next node.
//* node 1 (val:1)-> node 2 (val:2) -> node 3 (val:4) -> node 5 (val:5)
//* 思維：雖說是刪除 node3，但其實是將 node 3 複製成 node 4，然後刪除 node4。
