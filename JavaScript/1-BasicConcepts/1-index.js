// parseInt and parseFloat 

// let a = "25";
// let b = "15.887";
// console.log(typeof a);
// console.log(typeof b);
// let parsed = parseInt(a);
// console.log(typeof(parsed));



// concatenation of strings:
// let str1 = "Puneet ";
// let str2 = "Sharma";
// let sum = str1 + str2;
// console.log(sum);
 

//use of backticks
// let str1 = "Puneet";
// let str2 = "Sharma";
// let output = str1 + str2;
// console.log(`The value of ${str1},${str2} is`,output); 


// //uppercase and lowercase methods
// let str1 = "Puneet,Sharma";
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase())
// console.log(str1.substring(2,4))
// console.log(str1.split(","));


//lets create objects
let namaskar  = {
    name : "Puneet Sharma",
    age: 21,
    gender: "Male",
    message: function() {
        console.log("Hello, my name is " + this.name);
    }
};
namaskar.message()