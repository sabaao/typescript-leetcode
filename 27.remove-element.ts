/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let i = 0;
  for (let x of nums) {
    if (x != val) {
      nums[i] = x;
      i++;
    }
  }
  return i;
}
// @lc code=end
