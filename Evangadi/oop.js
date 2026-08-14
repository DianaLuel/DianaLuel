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


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Original numbers:", numbers);

let newNumbers = numbers.map(value => value * 2);

console.log("Doubled numbers:", newNumbers);

let result = newNumbers.filter(value => {
    return value > 10;
});

console.log("Numbers greater than 10:", result);

let Even = newNumbers.filter(value => {
    evenNumbers = value % 2 === 0;
    return evenNumbers;
});

console.log("Even numbers:", Even);