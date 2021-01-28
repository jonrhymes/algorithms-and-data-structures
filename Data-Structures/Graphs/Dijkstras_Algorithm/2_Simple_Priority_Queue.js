class PriorityQueue{
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    };
    dequeue() {
        return this.values.shift();
    };
    // BIG O Complexity for sort: O(N * log(N))
    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    };
}

var q = new PriorityQueue();

q.enqueue("B", 3);
q.enqueue("C", 5);
q.enqueue("D", 2);
q.enqueue("Q", 20);
q.enqueue("P", 1.5);


// console.log(q.values)
console.log(q.dequeue())


