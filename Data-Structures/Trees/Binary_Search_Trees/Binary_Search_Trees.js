// Big O of BST
// Insertion = O(log n) - REALLY GOOD! Almost O(1) time
// Searching = O(log n)

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
}


var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
// console.log(tree)

console.log(tree.find(2))






// Trees are data structures that consist of nodes in a parent / child relationship. They are NONLINEAR, unlike Lists.

// ROOT = Top node in a tree
// CHILD = Node directly conencted to another node when moving away from the Root.
// PARENT = Converse notion of a child
// SIBLINGS = A group of nodes with the same parent
// LEAF = Node with no children
// EDGE = Connection between nodes

// HTML DOM, Network Routing, Abstract Syntax Tree, Artificial Intelligence, Folders in operating system, JSON 


// Binary Search Trees are a type of Tree.
// Every parent node has at most TWO (2) children
// Every node to the LEFT of a parent is ALWAYS LESS than the parent
// Every node to the RIGHT of a parent is ALWAYS GREATER than the parent