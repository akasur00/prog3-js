
const decrement_base = 0.01;
const decrement_exponent = 0.01;
function exponentiation(){
    let base = 1.0;
    let exponent = 1.0;

    //loop with decrementing base
    for (let i = 0; i < 101; i++) {
        console.log(`base: ${base.toFixed(2)}\texponent: ${exponent.toFixed(2)}\n`, (base ** exponent).toFixed(2));
        base -= decrement_base;
        exponent -= decrement_exponent;
    }

    console.log()

    console.log("other Exponentiation results:",
    "\n0^1:\t", 0 ** 1,
    "\n1^0:\t", 1 ** 0,
    "\n0^0:\t", 0 ** 0);
}