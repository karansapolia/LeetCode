/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//  My Solution

var maxDepth = function (root, currDepth = 0) {
  let max_depth = 0;
  if (root && root.val !== null) {
    currDepth++;
    if (currDepth > max_depth) {
      max_depth = currDepth;
    }

    if (root.left || root.right) {
      let left = maxDepth(root.left, currDepth);
      if (left > max_depth) {
        max_depth = left;
      }
      let right = maxDepth(root.right, currDepth);
      if (right > max_depth) {
        max_depth = right;
      }
    }
  }
  return max_depth;
};

// Better Solution

var maxDepth = function (root) {
  return recurseDown(root, 0);
};

function recurseDown(node, level) {
  if (!node) return level;
  var rightLevel;
  var leftLevel;

  leftLevel = recurseDown(node.left, level + 1);
  rightLevel = recurseDown(node.right, level + 1);

  return leftLevel > rightLevel ? leftLevel : rightLevel;
}

// Fastest solution

var maxDepth = function (root) {
  if (root === null) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
