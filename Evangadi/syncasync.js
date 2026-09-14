// console.log("Start");

// function delay(seconds) {
//     const start = Date.now();
//     let x = true;
//     while(x) {
//         const now = Date.now();
//         if(now - start >= seconds * 1000) {
//             console.log("Delay of " + seconds + " seconds is over");
//             x = false;
//         }
//     }
// }

// delay(5);

// console.log("This is unrelated to the timer above but here we go we run ater the timer function finished");


// // // Asyncronus 

// console.log("Task 1");

// setTimeout(() => {
//     console.log("Task 2");
// }, 2000);

// console.log("Task 3");


// var x;
// console.log("Hi");
// function greet(seconds) {
//     setTimeout(() => {
//         x = "Hello";
//         console.log("hi from setTimeout");
//     }, seconds * 1000);
// }

// greet(0);

// console.log("selam new");


// console.log(x); // undefined because the setTimeout has not executed yet


// Callback function

function orderPizza(callback) {
    console.log("Ordering pizza...");
    setTimeout(() => {
        const pizza = "🍕";
        console.log(`Your ${pizza} is ready!`);
        callback(pizza);
    }, 2000);
}

function pizzaReady(pizza) {
    console.log(`Enjoy your ${pizza}!`);
}

orderPizza(pizzaReady);