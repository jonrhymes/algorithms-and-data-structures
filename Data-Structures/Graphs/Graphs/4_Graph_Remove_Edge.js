// GRAPH CLASS
// For an UNDIRECTED graph

class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; 
    }
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
}

let g = new Graph();

g.addVertex("Jon");
g.addVertex("Alison");
g.addVertex("Sadie");


g.addEdge("Jon","Alison")
g.addEdge("Alison","Sadie")

console.log(g)

g.removeEdge("Alison","Sadie")

console.log(g)

g.removeEdge("Jon","Alison")

console.log(g)