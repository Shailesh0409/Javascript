/*******Nums********/
const score = 400                     
console.log(score);                     // 400      

const num = new Number(100)
console.log(num);                      // [Number: 100]

console.log(num.toString());           // 100 -> string
console.log(typeof num.toString());    // string
console.log(num.toString().length);    // length of the converted num into string is 3

console.log(num.toFixed(3));    // 100.000
console.log(num.toFixed(2));    // 100.00

const n = 1123.896625
console.log(n.toPrecision(6));  // 1123.90
console.log(n.toPrecision(3));  // 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString());          // 1,000,000 (American Standard Value)
console.log(hundreds.toLocaleString('en-IN'));   // 10,00,000 (Indian Standard Value)

/* *******MATH******* */

console.log(Math.abs(-4));           // it give a accurate positive value -> 4
console.log(Math.round(4.3));        // 4
console.log(Math.ceil(4.2));         // 5
console.log(Math.floor(3.8));        // 3
console.log(Math.min(3,7,2,9));      // MAX Value --> 2
console.log(Math.max(7,16,36,0,8));  // Max Value --> 36

console.log(Math.random());         // It will give any value between 0 & 1  --> 0.85484 || 0.26544

console.log((Math.random() * 10) + 1);  // 3.5386468  It give floating value between 1 & 10

console.log(Math.floor(Math.random() * 10) + 1);  // It give a decimal value between 0 & 10

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)+min));  // it give randon value+min (value in 10 & 20)


 