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

const exampleArray = [1, 9, 9, 8, 5, 4, 2, 7, 4, 3, 6, 10,11];
const tree = new Tree(exampleArray);

prettyPrint(tree.root);
