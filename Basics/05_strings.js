let name = "Shailesh"
let age = 25

// console.log("My name is : "+ name + " and age is : "+age);  // outdated syntax rather than we use following 
// console.log(`My name is : ${name} and age is : ${age}`);   // This is called a String Interpolition
console.log(`${age}`);     // 25
console.log(`${name}`);    // Shailesh

const myName = new String("Java-Script")    // we can declare in this type of syntax also
                                           // check it on google console for checking available operations on string
console.log(myName[4]);                   // S         
console.log(myName.__proto__);            // syntax for check prototype => {} - String
console.log(myName.length);
console.log(myName.toUpperCase());        // it made changes in character type but not actual String , it call the fun

console.log(myName.charAt(5));          // char at position 5 => C
console.log(myName.indexOf("t"));       // index if t => 10

/* u can see all the String Functions on Google console or MDN docs to,
 learn String in dept as interview POV 
*/

const newString = myName.substring(0,4) // I stroed the 0-4 char of myName in newString => Java
console.log(newString); 

const str = myName.slice(5,-2)   // Scri
console.log(str)

const newStr1 = "   Shailesh   "
console.log(newStr1);
console.log(newStr1.trim());        //.trime() avoids only staring and ending whitespaces 

const url = "shaielsh%20agarmore.com"
console.log(url.replace('%20', '-'));  // replace %20 => -
console.log(url.includes('java'));    // false => because include check is present or not in given string 
// ---"java" is not present in url---

const newName = new String('shailesh-CDAC-acts-pune')
console.log(newName.split('-'));                    // it will automatically store in Array by seperating the spaces'-'
// => [ 'shailesh', 'CDAC', 'acts', 'pune' ]



 


