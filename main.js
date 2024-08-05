import { Node, Tree } from './binary-search-tree.js';

// This function will expect to receive the root of your tree as the value for the node parameter.
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const exampleArray = [1, 9, 9, 8, 5, 4, 2, 7, 4, 3, 6, 10];
const tree = new Tree(exampleArray);

prettyPrint(tree.root);
console.log('Is balanced: ' + tree.isBalanced());
console.log('-----------------------------');

tree.insert(11);
tree.insert(13);
tree.insert(0);

prettyPrint(tree.root);
console.log('Is balanced: ' + tree.isBalanced());
console.log('-----------------')
tree.rebalance();
prettyPrint(tree.root);
console.log('Is balanced: ' + tree.isBalanced());
// tree.deleteItem(11);
// prettyPrint(tree.root);
// tree.deleteItem(13);
// prettyPrint(tree.root);
// tree.deleteItem(8);
// prettyPrint(tree.root);

// tree.levelOrder(node => console.log(node.data));

// tree.inOrder(node => console.log(node.data));

// tree.postOrder(node => console.log(node.data));

// tree.preOrder(node => console.log(node.data));

// console.log(tree.height(tree.root));

// console.log(tree.depth(new Node(2)));
