let number = "10";
console.log("Implicit conversion:", number, "(Type:", typeof number + ")");

let number1 = "55";
let convertedNumber = Number(number1);
console.log("Explicit conversion:", convertedNumber, "(Type:", typeof convertedNumber + ")");

let nullvalue = null;
let convertedNull = Number(nullvalue);
console.log("Edge case -Nullconversation:", convertedNull, "(Type:", typeof convertedNull + ")");

