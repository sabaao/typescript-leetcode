/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  return recursive(root.left, root.right);
}

function recursive(node1: TreeNode, node2: TreeNode): boolean {
  if (node1 === null && node2 === null) return true;
  if (node1 === null || node2 === null) return false;

  if (node1.val !== node2.val) return false;

  let isSame1 = recursive(node1.left, node2.right);
  let isSame2 = recursive(node1.right, node2.left);

  return isSame1 && isSame2;
}

// @lc code=end
