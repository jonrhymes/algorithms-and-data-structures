// GRAPH CLASS
// For an UNDIRECTED graph

class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; 
    }
}

let g = new Graph();

console.log(g.addVertex("Jon"))
g.addVertex("Alison")
g.adjacencyList["Jon"].push("Coder")
g.addVertex("Jon")
console.log(g)