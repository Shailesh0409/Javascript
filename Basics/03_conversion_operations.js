let score = "33"
let value = Number(score)
//console.log(typeof value)   // Number
//console.log(value);           // 33

let Score="33ab"
let Value = Number(Score)
//console.log(typeof Value); // Number => it show as a number while typecasting but actual it is "NaN"

//console.log(Value);        // NaN => Not a Number, because it is non valid integer value

let Name = "shailesh"
let type = Number(Name)
//console.log(typeof type);     // Number
//console.log(type);            // NaN

let Change = null
//console.log(typeof Change);   // object  
let Num = Number(Change)    
//console.log(typeof Num);    //type =>   Number |  String 
//console.log(Num);           //            0    |   null

let x = undefined
let y = Number(x)
//console.log(typeof y);   // type id number 
//console.log(y);          // NaN

let bool = true
let a = Number(bool)
// console.log(typeof bool);   // boolean
// console.log(typeof a);      // number
// console.log(a);             // 1   => true=1 | false=0

/* ****Conversions
    "33"   => 33
    33abc  => NaN
    true = 1 | false = 0
*/ 

// let isLoggedIn = "shailesh"               // String i.e true in boolean
// let boolLoggedIn = Boolean(isLoggedIn)    // boolean
// console.log(boolLoggedIn);                //  true

let isLoggedIn = ""                          // empty String i.e false in boolean
let boolLoggedIn = Boolean(isLoggedIn)     
//console.log(boolLoggedIn);                 // false 

/* ***Conversion
    1 => true | 0=> false
    "shailesh" => true | " " => false    || if Number then 1 & 0
*/

let p = 33
let q = String(p)       // Number to String Conversation
console.log(q);         // 33
console.log(typeof q);  // String