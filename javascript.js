// let a = 2
// let b = 4
// let c = 3
// console.log((a+b)+c);

// function ab(a, b) {
//     let result = 0;
//     for (let c = 0; c < b; c++) {
//       result += a;
//     }
//     return result;
//   }
// console.log(ab(5,5));

// console.log(3&&2);



// Q NO 1:

// const sentence = "the quick brown for jumps over the lazy dog";

// const words = sentence.split(" ");
// let longestWord = "";

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > longestWord.length) {
//     longestWord = words[i];
//   }
// }

// console.log(`The longest word is: ${longestWord}`);

// Q NO 2:

// let a = "Hello Mello";
//   b = a.replaceAll("e","*");
//   console.log(b)

// Q NO 3:


// function name(str) {
//     return str
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
// }
// console.log(name("zaibullah shah atiullah shaheed"));




// Q NO 4:

// let marks = 75
// function getGrade(marks){
//   if(marks <=100){
//     console.log("You Get A Grade")
//   }
//   else if(marks <=89){
//     console.log("You Get B Grade")
//   }
//   else if(marks <=79){
//     console.log("You Get C Grade")
//   }
//   else if(marks <=69){
//     console.log("You Get D Grade")
//   }
//   else if(marks <=59){
//     console.log("You Get F Grade")
//   }
//   else{
//     console.log("Input Valid Marks!") 
//   }
// }
// getGrade(marks)




// const readline = require('node:readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`);
//   rl.close();
// });


// Q NO 5:

// const obj = {
//     name: "Aly",
//     message: 10
// };
// const tamplate = "Hello "+ [obj.name] +"! you have " + [obj.message]+ " massages."
// console.log(tamplate);


// Q NO 6:

// Binary conversion

// binary operation (5, 3), "And"
// binary operation (5, 3), "OR"
// binary operation (5, 3), "XOR"

// let x = 5;
// let y = 3;

// if (x > 2 && y > 2) {
//   console.log("Both conditions are true");
// } else {
//   console.log("One or both conditions are false");
// }

// 


// let x = 5;
// let y = 3;

// if (x > 6 || y > 7) {
//   console.log("Both conditions are true");
// } else {
//   console.log("One or both conditions are false");
// }


// let x = 5;
// let y = 3;

// if (x > 7 ?? y < 7) {
//   console.log("Both conditions are true");
// } else {
//   console.log("One or both conditions are false");
// }


// Q NO 7:

// const arry1=[1,2,3,4];
// const arry2=[1,3,7,8];

// const commonElements = arry1.filter(element => arry2.includes(element));
// console.log(commonElements);



// Q NO 8:

// ("Hello world", "L")





// let a = 100;
// let b = "apple";
// let c = a / b;
// console.log(c);


// console.log("false" && true);


