/*
 * @lc app=leetcode id=77 lang=typescript
 *
 * [77] Combinations
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const result: number[][] = [];

  const backTrackingNumber = (temp: number[], index: number) => {
    if (temp.length === k) result.push(temp);

    for (let i = index; i <= n; i++) {
      backTrackingNumber([...temp, i], i + 1);
    }
  };

  backTrackingNumber([], 1);

  return result;
}
// @lc code=end
