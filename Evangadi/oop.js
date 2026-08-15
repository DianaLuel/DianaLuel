// let Abebe = {
//     firstname: "Abebe",
//     lastname: "Kebede",

//     sing: function() {
//         console.log("Abbe beso bela.");
//         return "abebe can sign";
//     },

//     fullName: function() {
//         return this.firstname + " " + this.lastname;
//     }

// }


// console.log(Abebe.sing());
// console.log(Abebe.fullName());


// let person = {
//     firstname: this.firstname,
//     lastname: this.lastname,

//     fullname: function() {
//         return this.firstname + " " + this.lastname;
//     },

//     sing: () => {
//         return "la la la la";
//     }
// }

// Almaz = Object.create(person);
// Almaz.firstname = "Almaz";
// Almaz.lastname = "Kebede";
// console.log(Almaz.fullname());
// console.log(Almaz.sing());


// function Person(fn, ln) {
//     this.firstname = fn;
//     this.lastname = ln;

//     this.fullname = function() {
//         return this.firstname + " " + this.lastname;
//     };

//     this.sing = () =>{
//         return "lu lu lu lu";
//     }
// }

// let Challa = new Person("Challa", "Kebede");
// console.log(Challa.fullname());
// console.log(Challa.sing());

// let example = new String("Abebe");
// let name = "Belete";

// console.log(example.length);
// console.log(name.toUpperCase());

// let student = ["Abebe", "Kebede", "Computer Science", 25, "Male"];

// student.forEach((value, index) => {
//     console.log(value, index);
// });

// student.shift();
// console.log(student);
// student.unshift("Abebe");
// console.log(student);
// student.pop();
// console.log(student);
// student.push("Female");
// console.log(student);


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log("Original numbers:", numbers);

// let newNumbers = numbers.map(value => value * 2);

// console.log("Doubled numbers:", newNumbers);

// let result = newNumbers.filter(value => {
//     return value > 10;
// });

// console.log("Numbers greater than 10:", result);

// let Even = newNumbers.filter(value => {
//     evenNumbers = value % 2 === 0;
//     return evenNumbers;
// });

// console.log("Even numbers:", Even);


// let number = 99.7;

// console.log("Original number:", number);
// console.log("Floored number:", Math.floor(number));
// console.log("Ceiled number:", Math.ceil(number));
// console.log("Rounded number:", Math.round(number));
// console.log("Square root of number:", Math.sqrt(100));
// console.log("Power of number 2^3:", Math.pow(2, 3));
// console.log("Random number between 0 and 1:", Math.random());
// console.log("Random number between 0 and 100:", Math.floor(Math.random() * 101));



// // WHAT IS HIDING AMONGEST THE CROWD?

// function detectWord(word) {
//     hiddenWord = '';
//     for (let i=0; i < word.length; i++) {
//         if (word[i] === word[i].toLowerCase()) {
//             hiddenWord += word[i];
//         }
//     }
//     return hiddenWord;
// }


// console.log(detectWord("HTAFRcARTGDaHAGDVTUHtNHFKFIV"));


// // ARRAY 1 CAN BE NESTED IN ARRAY 2
// // IF ARRAY 1 MIN > ARRAY 2 MIN
// // ARRAY 1 MAX < ARRAY 2 MAX

// function canNest(arr1, arr2) {
//     if (Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(canNest([1, 2, 3], [0, 4])); // true
// console.log(canNest([1, 2, 3], [0, 4, 5])); // true
// console.log(canNest([1, 2, 3], [0, 2])); // false


// let users = ["Diana", "Abebe", "Sara"];

// let result = users.filter(user => user.includes("a"));

// console.log(result);

// let username = "   Diana   ";

// console.log(username.trim());
// // "Diana"

// let name = "Diana Luel";

// let parts = name.split(" ");

// console.log(parts);
// // ["Diana", "Luel"]

// let text = "Hello World";

// console.log(text.replace("World", "Diana"));
// // Hello Diana

// let url = "https://example.com";

// console.log(url.startsWith("https")); // true

// let file = "profile.jpg";

// console.log(file.endsWith(".jpg")); // true


// let text = "Hello world";

// console.log(text.indexOf("world")); // 6


// let text = "The rain is beautiful.";

// let result = text.search("rain");

// console.log(result);

// let text = "The rain is beautiful.";

// console.log(text.search("sun"));


// let text = "My phone number is 0911223344";

// let result = text.search(/[0-9]/);

// console.log(result);

// let text = "The rain is beautiful.";

// let result = text.match("rain");

// console.log(result);
// console.log(result.index);
// console.log(result.input);
// console.log(result[0]);


// let text = "The rain in Spain stays mainly in the plain.";

// let result = text.match(/ain/g);

// console.log(result);

// // The g means global, so it finds all matches instead of just the first one.

// // Without g:

// let text = "The rain in Spain stays mainly in the plain.";


// console.log(text.match(/ain/));


// let text = "The rain in Spain stays mainly in the plain.";

// let results = text.matchAll(/ain/g);

// for (let result of results) {
//     console.log(result);
// }


let text = "The rain in Spain stays mainly in the plain.";

let results = text.matchAll(/ain/g);

for (let result of results) {
    console.log(result[0]); // matched text
    console.log(result.index); // position
}