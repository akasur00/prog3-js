
const K = 100000; //Constant for number of iterations
const res_c = 1.443359;

function overflow(){
    let sum= 0.0, result= 0.0, round=256.49999999999999;
    console.log("program for floating-point rounding error")
    console.log("rounding error:\nrounding of 256.49999999999999 --> should be 256:", Math.round(round),
        "\ncompare to rounding error for float in c: ", 256.49999);     //number of decimals where error occurs in c

    for (let i = 0; i < K; i++) {
        sum = sum + 0.1;
    }
    result = K / 10.0 - sum;

    console.log("cumulative errors by multiple summations: (should be 0)\t"
        , result.toFixed(10), "\t\trounded: ", Math.round(result), "\ncompare to result in c:\t\t\t\t\t", res_c, "\ndifference:\t\t\t\t\t\t", result - res_c);

    console.log();

    console.log("Over/Underflow errors:",
        "\nMax Value of numbers in js:\t\t\t", Number.MAX_VALUE,
        //"\n\t\tas BigInt:\t\t\t\t", BigInt(Number.MAX_VALUE),
        "\ncompare to Max Value of Long in c:\t\t", 0x7fffffffffffffff,
        "\ntrying overflow computation: MAX_VALUE + 100:\t", Number.MAX_VALUE + 100,
        "\nanother overflow comp: MAX_VALUE * 2:\t\t", Number.MAX_VALUE * 2,
        "\nMin Value of numbers in js:\t\t\t", Number.MIN_VALUE,
        "\ntrying underflow computation: MIN_VALUE - 1:\t", Number.MIN_VALUE - 1);
}