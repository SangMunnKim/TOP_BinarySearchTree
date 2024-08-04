class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(array) {

        const nonDuplicatesAndSortedArray = this.sort(this.removeDuplicates(array));

        this.root = this.buildTree(nonDuplicatesAndSortedArray, 0, nonDuplicatesAndSortedArray.length - 1);
    }

    buildTree(array, start, end) {
        if (start > end) {
            return null; 
        }

        const mid = Math.floor((start + end) / 2);
        const node = new Node(array[mid]);

        node.left = this.buildTree(array, start, mid - 1);
        node.right = this.buildTree(array, mid + 1, end);

        return node;
    }

    insert(value, root = this.root) {

        if (root === null) {
          root = new Node(value);
          return root;
        }
  
        if (value < root.data) {
          root.left = this.insert(value, root.left);
        } else if (value > root.data) {
          root.right = this.insert(value, root.right);
        }
  
        return root;
    }

    deleteItem(value) {

    }

    sort(array) {

        return array.sort((a, b) => a - b);
    }

    removeDuplicates(array) {
        return [...new Set(array)];
    }
}

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
console.log('-----------------------------');

tree.insert(11);
tree.insert(13);
tree.insert(0);

prettyPrint(tree.root);
