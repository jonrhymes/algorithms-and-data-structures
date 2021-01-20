// MaxBinaryHeap - Parent nodes are always larger than child nodes. Fill in left first
// MinBinaryHeap - Parent nodes are always smaller than child nodes 

// Time Complexity - O(log N) insertion and removal
// MaxBinaryHeap:

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const value = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(value <= parent) break; 
            this.values[parentIdx] = value;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)


// [41,39,33,18,27,12,55]
//  0  1  2  3  4  5  6