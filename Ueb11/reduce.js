function main(){
const number = 10;
console.log(faculty_reduce(number));

}

function faculty_reduce(num){
    const num_array = [];       //create Array for all numbers < num
    for (let i = 1; i <= num; i++) {    //start with one, because 0! = 1
        num_array.push(i);
    }
    let initial_value = 1;              //also start with one for multiplication
    return num_array.reduce(
        (accumulator, current_value) => accumulator * current_value,
        initial_value
    );
}

function faculty(num){
    if (num === 0) {
        return 1;
    } else {
        return num * faculty(num-1);
    }
}