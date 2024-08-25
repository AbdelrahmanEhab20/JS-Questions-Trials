// 145. Binary Tree Postorder Traversal
// ! https://leetcode.com/problems/binary-tree-postorder-traversal/description/?envType=daily-question&envId=2024-08-25
var postorderTraversal = function (root) {
  const result = [];

  function traverse(node) {
    if (node) {
      // Traverse the left subtree
      traverse(node.left);
      // Traverse the right subtree
      traverse(node.right);
      // Visit the root node
      result.push(node.val);
    }
  }

  traverse(root);
  return result;
};
let testCase = postorderTraversal([1, null, 2, 3]);
console.log(" -----------------------------");
console.log(" ----------------------");
console.log(testCase);
console.log(" ----------------------");
console.log(" -----------------------------");
