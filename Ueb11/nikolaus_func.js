function nikolaus(){
    const point_map = {     //All points with their neighbours
        'A': ['E', 'D', 'B'],
        'B': ['C', 'D', 'A', 'E'],
        'C': ['B', 'D'],
        'D': ['A', 'E', 'B', 'C'],
        'E': ['A', 'B', 'D'],
    }

    const edge_map = {  //All edges and their points connecting
        '1': ['A', 'B'],
        '2': ['B', 'C'],
        '3': ['C', 'D'],
        '4': ['D', 'E'],
        '5': ['E', 'A'],
        '6': ['A', 'D'],
        '7': ['B', 'D'],
        '8': ['B', 'E']
    }

    /*
            C
          -   -
        2       3
      -           -
    B   -   7   -   D
    -   -       -   -
    1       -       4
    -   6       8   -
    A   -   5   -   E
    */


    //chooses A as start
    let current_point = Object.keys(point_map)[0];
    let point;
    let next_point;
    const path = [];

    while (!(Object.keys(edge_map).length === path.length)) {   //stop when all edges have been visited
        for (let i = 0; i < point_map[current_point].length; i++) { //iterate through the neighbours in point
            point = point_map[current_point][i];        //get neighbouring point out of the point_map
            const current_edge = determine_edge(current_point, point, edge_map)     //look if edge is in edge_map
            if (!(path.includes(current_edge))) {
                path.push(current_edge);                //if edge is not included in the path-array: push
                next_point = point;                     //go on with the next point
                break;
            }
        }
        current_point = next_point;                     //stay on the same point and iterate further
    }

    let str = "";
    for (let i = 0; i < Object.keys(edge_map).length; i++) {
        str += (edge_map[path[i]].join(' -> ')) + ":";      //show all Edges as the way from point x to y
    }
    console.log(str);           //output string
}

function determine_edge(current_point, point, edge_map){
    for (const edgeMapKey in edge_map) {
        if ((edge_map[edgeMapKey][0] === current_point && edge_map[edgeMapKey][1] === point ||
            edge_map[edgeMapKey][1] === current_point && edge_map[edgeMapKey][0] === point)) {
            return edgeMapKey;
        }
    }
}

