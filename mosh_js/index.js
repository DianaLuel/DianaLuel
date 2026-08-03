// showStars(10);

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         console.log("*" * row)
//     }
// } 


// showStars(10);

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let pattern = '';
//         for(let i=0; i< row; i++) {
//             pattern += '*';
//         }
//         console.log(pattern)
//     }
// } 

// function isLandscape(width,height) {
//     return (width > height);
// }

// console.log(isLandscape(40,50));

// // DEMERIT
// checkSpeed(180);

// function checkSpeed(speed) {
//     let points = 0;
//     let max_speed = 70;
//     if (speed <= (max_speed + 5)) {
//         console.log("Ok")
//     } else {
//         points = Math.floor((speed - max_speed) / 5);
//         if (points < 12) {
//         console.log("Points: ", points);
//         } else {
//             console.log("License suspended.")
//         }
//     }
// }



// const array = [0, null, true, undefined, NaN, '', false, 1, 2, 3];

// console.log(countTruthy(array));

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array) {
//         if (value) {
//             count++;
//         }
//     }
//     return count;
// }


// const movie = {
//     title: 'ads',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'fgr'
// };

// showProperties(movie);

// function showProperties(obj) {
//     // console.log(obj)
//     for (let key in obj) {
//         if (typeof obj[key] === "string") {
//             console.log(key, obj[key])
//         }
//     }
// }


// console.log(sum(10));

// function sum(limit) {
//     let sum = 0;

//     for (let number=0 ; number <= limit; number++){
//         if (number % 3 === 0 || number % 5 === 0) {
//             sum += number;
//         }
//     }

//     return sum;
// }


// const marks = [80, 50, 50];

// console.log(calculateGrade(marks));


// const average = calculateAverage(array);

// function calculateGrade(average) {
//     let grade = '';

//     if (average >= 90) {
//         grade = "A";
//     } else if (average >= 80) {
//         grade = "B";
//     } else if (average >= 70) {
//         grade = "C";
//     } else if (average >= 60) {
//         grade = "D";
//     } else {
//         grade = "F";
//     }

//     // Or 
//     // You could've used if (average < 60) retun 'F'

//     return grade;
// }

// function calculateAverage(array) {
//     let sum = 0;
//     let count = 0; // You could've used array.length
//     for (let value of array) {
//         count++;
//         sum += value;
//     }
//     const average = sum / count;

//     return average;
// }


showPrimes(20);


function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        let isPrime = true;

        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(number);
    }
}