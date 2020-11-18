class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var node = new Node(val);
        if(this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    unshift(val) {
        var node = new Node(val);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }
    shift() {
        var shiftHead = this.head;
        if(this.length === 0) return undefined;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftHead.next;
            this.head.prev = null;
            shiftHead.next = null;
        }
        this.length--;
        return shiftHead;
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;
        if(index <= this.length / 2) {
            var count = 0;
            var current = this.head;

            while(count != index) {
                current = current.next;
                count++;
            }
        } else {
            var count = this.length - 1;
            var current = this.tail;

            while(count != index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    pop() {
        if(this.length === 0) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            poppedNode.prev = null;
            this.tail.next = null;
        }
        this.length--;
        return poppedNode;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
  
        var newNode = new Node(val);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;

        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        var removedNode = this.get(index);
        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;

        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var next;
        var prev = null;

        for(var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;       
    }

}

var list = new DoublyLinkedList();
list.push(5)
list.push(15)
list.push(20)
list.push(25)
// console.log(list)
// list.pop()
console.log(list.reverse())



