function nikolaus(){
    const edges = [1, 2, 3, 4, 5, 6, 7, 8];
    const points = ['A', 'B', 'C', 'D', 'E'];
    const adjacency_map = {
        'A': [1, 6, 5],
        'B': [1, 2, 7, 8],
        'C': [2, 3],
        'D': [3, 7, 4, 6],
        'E': [4, 5, 8],
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

    const path = [];
    const stack = [0];

    while (stack.length > 0) {
        const current_point = stack[stack.length - 1];
        if (adjacency_map[current_point] && adjacency_map[current_point].length > 0) {
            const next_point = adjacency_map[current_point].pop();
            stack.push(next_point);
        } else {
            path.push(stack.pop());
        }
    }

    //start at point A


    console.log(path.reverse().join(' -> '));
}