/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set<number>(nums1);
  const resultSet = new Set<number>();
  const array = [];
  nums2.forEach((num) => {
    if (set.has(num)) {
      resultSet.add(num);
    }
  });

  return Array.from(resultSet);
}
// @lc code=end
