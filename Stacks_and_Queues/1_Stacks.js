// A Stack is a data collection, abstract data structure
// Abides by LIFO principle: Last In, First Out
// The last element added to the stack wil lbe the first element removed from the stack

// Stacks are used to:
// 1. Manage function invocations
// 2. Undo / Redo
// 3. Routing (the history object)

// Big O of Stacks:
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)

// Using an Array to model Stacks:

// var stack = []
// stack.push("yahoo")
// stack.push("instagram")
// stack.push("youtube")
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())

// stack.unshift("create new file")
// stack.unshift("resized file")
// stack.unshift("duplicated image")
// console.log(stack.shift())
// console.log(stack.shift())
// console.log(stack.shift())

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        var newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        // increments the size by 1 and returns it in one line
        return ++this.size;
    }
    pop() {
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

var stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack)