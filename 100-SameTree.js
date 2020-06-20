/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */


// My solution 
var isSameTree = function(p, q) {
    // if both are null
    if ((p === null) && (q === null)) {
        return true;
    }
    
    // if either is null/undefined
    if((p === null) || (q === null)) {
        return false;
    }
    
    //if both have equal values
    if (p.val !== q.val) {
        return false;
    }
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// Better solution
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}