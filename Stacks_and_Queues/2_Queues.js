// A Queue is an abstract data structure
// Abides by a FIFO principle: First In, First Out

// Big O of Queues:
// Insertion - O(1)
// Removal - O(1)

// var q = [];

// q.push("FIRST")
// q.push("SECOND")
// q.push("THIRD")
// q.shift()
// q.unshift("FIRST")
// q.unshift("SECOND")
// q.unshift("THIRD")
// console.log(q.pop())
// console.log(q.pop())
// console.log(q.pop())
// console.log(q)

// Queue Class, as Singly Linked List

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value) {
        var newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
           this.last.next = newNode;
           this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if(!this.first) return null;

        var temp = this.first
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

var q = new Queue()

q.enqueue("FIRST")
q.enqueue("SECOND")
q.enqueue("LAST")
console.log(q)
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
