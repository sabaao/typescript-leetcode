/*
 * @lc app=leetcode id=1047 lang=typescript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
function removeDuplicates(s: string): string {
  const result: string[] = [];
  for (let str of s) {
    if (str === result[result.length - 1]) {
      result.pop();
    } else {
      result.push(str);
    }
  }
  return result.join("");
}
// @lc code=end
