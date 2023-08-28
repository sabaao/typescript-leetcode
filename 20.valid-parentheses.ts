/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const map = new Map<string, string>();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");
  let result = true;
  const array: string[] = [];
  for (let str of s) {
    if (map.has(str)) {
      array.push(str);
    } else {
      const value = map.get(array.pop());

      if (value !== str) {
        result = false;
        break;
      }
    }
  }
  return array.length === 0 && result === true;
}
// @lc code=end
