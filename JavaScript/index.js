// mere pass 3 tareeke hai object vreate karne ke 
 //          1st method
 let person = {
    name : "Puneet",
    lastname : 'Sharm'
 };
 

 console.log(person["name"]);

 //  2nd method
//  let aadmi  = new Object();
// aadmi.name = "puneet sharma";
// console.log(aadmi.name);



// cloning an object
let human = {
    name: "Puneet Sharma",
    age : 40,
    message  : function(){
        console.log("ram ram ji ", this.name);
    }
}
human.message();






// const arr = [1,2,3,4,5,6,7,8,9,10];
// const brr = arr.filter(function(number){
//     return number%2==0;
// })

// console.log(brr);









// setTimeout(function(){
//     console.log("aadhe ghante baad chal :")
// },5000)







// let fruits = ["Apple", "Banana", "Orange"];



// console.log(fruits[0]);                    // Banana

// // let primeNumbers = [2, 3, 5, 7, 11, 13];

// // let firstPrimeNum = primeNumbers[0];
// // console.log(firstPrimeNum);             // 2

// // let data = [true, 'ab', "great", 34];

// // let data3 = data[2];
// // console.log(data3);                     // great








// // let person = {
// //     names: "Mayank",
// //     age: 21,
// //     country : "India",
// //     message: function() {
// //         console.log("Hello, my name is " + this.age);
// //         // jab tak this keyword ka use nahi karunga tab tak function mai key access nahi kar paunga
// //     }
// // };

// // person.message(); 

// // // Output: Hello, my name is John