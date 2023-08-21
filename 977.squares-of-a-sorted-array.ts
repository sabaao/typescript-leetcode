/*
 * @lc app=leetcode id=977 lang=typescript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
}
// @lc code=end
