# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def insertIntoBST(self, root, val):
        """
        :type root: Optional[TreeNode]
        :type val: int
        :rtype: Optional[TreeNode]
        """
        if not root:
            return TreeNode(val)

        if val > root.val:
            root.right = self.insertIntoBST(root.right, val)
        else:
            root.left = self.insertIntoBST(root.left, val)
        return root


# class Solution(object):
#     def insertIntoBST(self, root, val):
#         """
#         :type root: Optional[TreeNode]
#         :type val: int
#         :rtype: Optional[TreeNode]
#         """
#         if not root:
#             return TreeNode(val)
#         cur = root
#         while True:
#             if val > cur.val:
#                 if not cur.right:
#                     cur.right = TreeNode(val)
#                     return root
#                 cur = cur.right
#             else:
#                 if not cur.left:
#                     cur.left = TreeNode(val)
#                     return root
#                 cur = cur.left
