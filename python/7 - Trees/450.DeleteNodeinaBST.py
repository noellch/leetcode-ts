# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# class Solution(object):
#     def deleteNode(self, root, key):
#         """
#         :type root: Optional[TreeNode]
#         :type key: int
#         :rtype: Optional[TreeNode]
#         """
#         if not root:
#             return root
#         if root.val > key:
#             root.left = self.deleteNode(root.left, key)
#         elif root.val < key:
#             root.right = self.deleteNode(root.right, key)
#         else:
#             if not root.left:
#                 return root.right
#             elif not root.right:
#                 return root.left
#             else:
#                 cur = root.right
#                 while cur.left:
#                     cur = cur.left
#                 root.val = cur.val
#                 root.right = self.deleteNode(root.right, cur.val)
#         return root


class Solution(object):
    def deleteNode(self, root, key):
        """
        :type root: Optional[TreeNode]
        :type key: int
        :rtype: Optional[TreeNode]
        """
        if not root:
            return root
        parent = None
        cur = root
        while cur and cur.val != key:
            parent = cur
            if key > cur.val:
                cur = cur.right
            else:
                cur = cur.left
        if not cur:
            return root
        if not cur.left or not cur.right:
            child = cur.left if cur.left else cur.right
            if not parent:
                return child
            if parent.left == cur:
                parent.left = child
            else:
                parent.right = child
        else:
            par = None
            delNode = cur
            cur = cur.right
            while cur.left:
                par = cur
                cur = cur.left
            if par:
                par.left = cur.right
                cur.right = delNode.right
            cur.left = delNode.left
            if not parent:
                return cur
            if parent.left == delNode:
                parent.left = cur
            else:
                parent.right = cur
        return root
