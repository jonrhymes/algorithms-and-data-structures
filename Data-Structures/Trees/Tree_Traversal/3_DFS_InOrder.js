// DEPTH FIRST SEARCH: In Order - Traverses the entire left side, then visits the root, then traverses the right

// In Order returns everything in exact order.

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
    DFSPostOrder(){
        var data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        var data = [];
        var current = this.root;

        function traverse(node){
            // if(node.left) traverse(node.left);
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
            // if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
// [ 3, 6, 8, 10, 15, 20 ]

//                      10
//                  6       15
//              3      8        20