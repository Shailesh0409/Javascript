//                  Primitive => Stack || Non-Primitive => Heap

/*               *****Primitive****    store on STACK

    1) Number           4) String
    2) BigInt           5) Undefined        7) Symbol(Unique)
    3) String           6) Null

*/ 

const id = 100;                 // Number
const val = 156.7
//console.log(typeof id);

const outSideTemp = null        // Null
let email                       // Undefined

const Num = Symbol("123")       // Symbol
const value = Symbol("123")     // Symbol

console.log(Num === value);    // False
/* Num and Value has same datatype and value is assigned but that are not same, B'cause 
    Symbol datatype is defines the variable as a Unique thats why Num and Values has defines the diff mean
*/

const bigNum = 56382399n     // BigInt
//console.log(typeof bigNum); 

/*               *****Non-Primitive/ Reference Type****    Store on HEAP
        1) Array
        2) Object 
        3) Function

        all non-primitive datatypes has return types is a function
        ex: array object, object , function object
*/

const heros = ["Spiderman", "Thor", "Batman"]       // Array
console.log(heros);

//const myObj = {name : "Shailesh" , age : 25}      // Object
    //Or
const myObj = {
                name : "Shailesh",
                age : 25
              }
console.log(myObj);

const myFun = function () {                        // Function
    console.log("Hello function");                   
}
                    
console.log(typeof myFun);       
         
let myName = "Shailesh@gmail"
let anotherName = myName
anotherName = "agarmore@gmail"

console.log(myName);                // Shailesh@gmail
console.log(anotherName);           // agarmore@gmail

let userOne = {
    email : "shailesh.com",
    upi : "Shailesh@ybl"
}

let userTwo = userOne
console.log(userOne.email);     // shailesh.com


userTwo.email = "user.com"

console.log(userOne.email);    // user.com
console.log(userTwo.email);    // user.com

console.log(userOne);         // { email: 'user.com', upi: 'Shailesh@ybl' }
console.log(userTwo);         // { email: 'user.com', upi: 'Shailesh@ybl' }