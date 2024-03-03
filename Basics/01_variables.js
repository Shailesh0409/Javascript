const accId = 1234
let accEmail = "Shailesh@123.com"       // always use let because var having issue in blog scope and functional scope..
var accCity = "Jaipur"

accState = "MH"         // we can declare var like this but it is not recommandable at all
let country             // if I run it without assign any value then it give udefined value (not null)

console.table([accId,accEmail,accCity,accState,country]) //we can use this output format to show output in tabular form..