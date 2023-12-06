function main_call(){
    //datatypes:
    let var_number = 1;  //number
    let var_bigint = BigInt(1);  //bigint
    let var_boolean = true; //boolean
    let var_undefined = undefined;  //undefined
    let var_null = null;    //null
    let var_string = "Hallo Welt";

    //objects
    const person = {firstname:"Ronan", lastname:"Mustermann", age:25, weight:75, height:185}
    let var_array = [1,2,3,4,5,6,7,8,9];

    console.log("Number: //function increments number");
    console.log(`values before function: ${var_number.toString()}`);
    console.log(`values inside function: ${f_number(var_number)}`);
    console.log(`values after function: ${var_number.toString()}`);

/*    console.log(`BigInt: //function also increments by 1`);
    console.log(`values before function: ${var_bigint.toString()}`);
    console.log(`values inside function: ${f_bigint(BigInt(var_bigint))}`);
    console.log(`values after function: ${var_bigint.toString()}`);
*/
    console.log("Boolean: //function alternates the value");
    console.log(`values before function: ${var_boolean.toString()}`);
    console.log(`values inside function: ${f_boolean(var_boolean)}`);
    console.log(`values after function: ${var_boolean.toString()}`);

    console.log("undefined: //function changes undefined to null");
    console.log(`values before function: ${var_undefined}`);
    console.log(`values inside function: ${f_undefined(var_undefined)}`);
    console.log(`values after function: ${var_undefined}`);

    console.log("NULL: //function changes null to undefined");
    console.log(`values before function: ${var_null}`);
    console.log(`values inside function: ${f_null(var_null)}`);
    console.log(`values after function: ${var_null}`);

    console.log("String: //function appends a String");
    console.log(`values before function: ${var_string}`);
    console.log(`values inside function: ${f_string(var_string)}`);
    console.log(`values after function: ${var_string}`);

    console.log("Results for arrays and objects:")
    console.log("Objects: //function changes some attributes")
    console.log(`values before function: ${person.firstname}, ${person.age}, ${person.weight}`);
    f_object(person);
    console.log(`values after function: ${person.firstname}, ${person.age}, ${person.weight}`);
    //let str;
    //for (const i in var_array) {
    //    str += `${var_array[i]}`;
    //} console.log(str); str = undefined;
    console.log("Arrays: //function increments elements by 1")
    console.log(`values before function: ${var_array.toString()}`);
    console.log(`values inside function: ${f_array(var_array)}`);
    console.log(`values after function: ${var_array.toString()}`);

}


function f_number(num){
    num += 1;
    return num.toString();
}
/*function f_bigint(bigint){
    bigint += 1;
    return bigint.toString();
}   Bigint doesnt work as a param
*/
function f_boolean(bool){
    bool = !bool;
    return bool.toString();
}
function f_undefined(undef){
    undef = null;
    return undef;
}

function f_null(nll){
    nll = undefined;
    return nll;
}
function f_string(str){
    str += ", frohe Feiertage!";
    return str;
}
function f_object(obj){
    obj.firstname += " Kevin";
    obj.age++;
    obj.weight += 5;
}
function f_array(array){
    for (const i in array) {
        array[i] += 1;
    }
    return array.toString();
}