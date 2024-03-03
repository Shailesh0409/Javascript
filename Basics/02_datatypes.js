// Documentation of javascript 
// 1) MDN 2) tc39.es

/*
**Primitive 
1) Number    => 2^53
2) bigint    => for lager number 
3) String    => "Shailesh"
4) boolean   => false/true
5) Null      => object 
6) undefined => not assigned
7) Symbol    => basically used in React js/ it is unique.

**Object type / Non-Primitive
1) Object    => 
2) Array     =>
3) Function  => 
4) Date      =>
*/
//Datatypes 
let age = 23                //numeber
let Myname = "Shailesh"       //String
let isLoggedIn = false      //boolean
let temp = null             // temperature could not be 0 its a null 
const person = {firstName:"John", age:23};   // Object:
const cars = ["Volvo", "BMW"];                       // Array object:
const date = new Date("2022-03-25");                 // Date object:


console.table([age,Myname,isLoggedIn,temp])
console.table([person,cars])

console.log([typeof(age),typeof(Myname),typeof(isLoggedIn),typeof(temp)]);
console.log([typeof(person),typeof(cars)])
console.log([typeof(null),typeof(undefined)])