function main_call(){
    //datatypes:
    let var_number = 1;  //number
    let var_bigint = BigInt(1);  //bigint
    let var_boolean = true; //boolean
    let var_undefined = undefined;  //undefined
    let var_null = null;    //null
    let var_string = "Hallo Welt";

    //objects
    const person = {firstname:"Ronan", lastname:"Mustermann", age:"25", weight:"75", height:"185"}
    let var_array = [1,2,3,4,5,6,7,8,9];

    console.log("Number:")
    console.log(`values before function: ${var_number.toString()}`);
    console.log(`values inside function: ${f_number(var_number)}`);
    console.log(`values after function: ${var_number.toString()}`);

    console.log("Results for arrays and objects:")
    console.log("Objects:")
    console.log(`values before function: ${person.toString()}`);
    console.log(`values inside function: ${f_object(person)}`);
    console.log(`values after function: ${person.toString()}`);
    //let str;
    //for (const i in var_array) {
    //    str += `${var_array[i]}`;
    //} console.log(str); str = undefined;
    console.log("Arrays:")
    console.log(`values before function: ${var_array.toString()}`);
    console.log(`values inside function: ${f_array(var_array)}`);
    console.log(`values after function: ${var_array.toString()}`);

}


function f_object(obj){
    obj.firstname += " Kevin";
    obj.age++;
    obj.weight += 5;
    return obj.toString();
}
function f_array(array){
    for (const i in array) {
        array[i] += 1;
    }
    return array.toString();
}