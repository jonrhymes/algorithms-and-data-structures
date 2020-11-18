// DEPTH FIRST SEARCH: PreOrder - Visits the root, then traverses the left side and across, then the right side

// PreOrder is used to recreate a tree. Flatten it and then it can be reconstructed.

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {
        if(this.root === null) return false;  
        var current = this.root,
            found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }  
        if(!found) return undefined;
        return current; 
    }
    BreadthFirstSearch(){
        var node = this.root,
            data = [],
           queue = [];

        queue.push(this.root);

        while(queue.length) {
            node = queue.shift()
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        var data = []
        var current = this.root;

        function traverse(node) {
            data.push(node.value)
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
        
    }
}
//                      10
//                  6       15
//              3      8        20

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
// console.log(tree.find(15))

console.log(tree.DFSPreOrder());