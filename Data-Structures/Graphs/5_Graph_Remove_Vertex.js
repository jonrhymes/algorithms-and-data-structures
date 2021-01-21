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
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
}

let g = new Graph();

g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los_Angeles");
g.addVertex("Hong_Kong");
g.addEdge("Dallas","Tokyo");
g.addEdge("Dallas","Aspen");
g.addEdge("Hong_Kong","Tokyo");
g.addEdge("Hong_Kong","Dallas");
g.addEdge("Los_Angeles","Hong_Kong");
g.addEdge("Los_Angeles","Aspen");

console.log(g)

g.removeVertex("Hong_Kong")
g.removeVertex("Aspen")

console.log(g)