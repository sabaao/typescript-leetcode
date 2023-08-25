/*
 * @lc app=leetcode id=541 lang=typescript
 *
 * [541] Reverse String II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  let left: number, right: number;

  let array = [...s];
  for (let i = 0; i < array.length; i = i + 2 * k) {
    left = i;
    right = i + k - 1 > array.length ? array.length - 1 : i + k - 1;
    while (left < right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }

  return array.join("");
}
// @lc code=end
