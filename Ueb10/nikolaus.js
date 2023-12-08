function nikolaus(){
    const point_map = {
        'A': ['B', 'D', 'E'],
        'B': ['C', 'D', 'A', 'E'],
        'C': ['B', 'D'],
        'D': ['A', 'E', 'B', 'C'],
        'E': ['A', 'B', 'D'],
    }

    const edge_map = {
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
    let test_edge
    let point;
    let next_point;
    const path = [];

    while (!(Object.keys(edge_map).length === path.length)) {
        for (let i = 0; i < point_map[current_point].length; i++) {
            point = point_map[current_point][i];
            const current_edge = edgefinder(current_point, point, edge_map)
            if (!(path.includes(current_edge))) {
                path.push(current_edge);
                next_point = point;
                break;
            }
        }
        current_point = next_point;
    }

    console.log(path.join(' -> '));
}

function edgefinder(current_point, point, edge_map){
    for (const edgeMapKey in edge_map) {
        if ((edge_map[edgeMapKey][0] === current_point && edge_map[edgeMapKey][1] === point ||
            edge_map[edgeMapKey][1] === current_point && edge_map[edgeMapKey][0] === point)) {
            return edgeMapKey
        }
    }
}