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

        //base case
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

    deleteItem(value, root = this.root) {
        //base case
        if (root === null) {
            return root;
        }

        //traverse to the left if value smaller than root
        if (value < root.data) {
            root.left = this.deleteItem(value, root.left);
        } 
        //traverse to the right if value bigger than root
        else if (value > root.data ) {
            root.right = this.deleteItem(value, root.right);
        }
        //delete node if value matches
        else {
            //case 1: the node has one or no child nodes
            if (root.left === null) {
                return root.right;
            }
            else if (root.right === null) {
                return root.left;
            }
            //case 2: the node has two child nodes
            else {
                const minData = function nextSmallestRightData(root) {
                    let min = root.data;
                    let newRoot = root;

                    while(newRoot.left !== null) {
                        newRoot = newRoot.left;
                        min = newRoot.data;
                    }

                    return min;
                }

                root.data = minData(root.right);

                root.right = this.deleteItem(root.data, root.right);
            }
        }
        return root;
    }

    find(value, root = this.root) {
        if (root.data === null || root.data === value) return root;

        if (value < root.data) {
            return this.find(root.data, root.left);
        } 
        else if (value > root.data) {
            return this.find(root.data, root.right);
        }
    }

    levelOrder(callback) {
        if (typeof callback !== 'function') {
            throw new Error('Callback needs to be a function!');
        }

        const queue = [this.root];

        while (queue.length > 0) {
            const currentNode = queue.shift();
            callback(currentNode);
            
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

    }

    inOrder(callback, root = this.root) {
        if (typeof callback !== 'function') {
            throw new Error('Callback needs to be a function!');
        }

        if(root === null) {
            return;
        }

        this.inOrder(callback, root.left);
        callback(root);
        this.inOrder(callback, root.right);

    }

    postOrder(callback, root = this.root) {
        if (typeof callback !== 'function') {
            throw new Error('Callback needs to be a function!');
        }

        if (root === null) {
            return;
        }

        this.postOrder(callback, root.left);
        this.postOrder(callback, root.right);
        callback(root);
    }

    preOrder(callback, root = this.root) {
        if (typeof callback !== 'function') {
            throw new Error('Callback needs to be a function!');
        }

        if (root === null) {
            return;
        }
        
        callback(root);
        this.preOrder(callback, root.left);
        this.preOrder(callback, root.right);
        
    }

    sort(array) {
        return array.sort((a, b) => a - b);
    }

    removeDuplicates(array) {
        return [...new Set(array)];
    }


}

export { Node, Tree }