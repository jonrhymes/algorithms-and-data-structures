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
}

let g = new Graph();

g.addVertex("Jon");
g.addVertex("Alison");
g.addVertex("Sadie");


g.addEdge("Jon","Alison")
g.addEdge("Alison","Sadie")
console.log(g)