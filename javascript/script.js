// // CALLBACK

// function walkDog(callback) {
    
//     setTimeout(() => {
//         console.log("Walking the dog...");
//     callback();
//     }, 1500);
// }

// function cleanKitchen(callback) {
//     setTimeout(() => {
//         console.log("Cleaning the kitchen...");
//         callback();
//     }, 1000);
// }

// function takeOutTrash(callback) {
//     setTimeout(() => {
//         console.log("Taking out the trash...");
//         callback();
//     }, 500);
// }


// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("All tasks completed!");
//         })
//     })
// })


// PROMISES

// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Walking the dog...");
//         }, 1500);
//     });
// }

// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Cleaning the kitchen...");
//         }, 2000);
//     });
// }

// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Taking out the trash...");
//         }, 500);
//     });
// }

// walkDog().then((message) => { console.log(message); return cleanKitchen(); })
//         .then((message) => { console.log(message); return takeOutTrash(); })
//         .then((message) => { console.log(message); console.log("All tasks completed!"); });



// function walkDog() {
//     return new Promise((resolve, reject) => {

//         const walkedtheDog = true;

//         if(walkedtheDog) {
//             resolve("You walk the Dog.");
//         }

//         else {
//             reject("You didn't walk the Dog.");
//         }

//         // setTimeout(() => {
//         //     resolve("Walking the dog...");
//         // }, 1500);
//     });
// }

// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
        
//         const cleanedtheKitchen = true;
//         if(cleanedtheKitchen) {
//             resolve("You cleaned the Kitchen.");
//         }
//         else {
//             reject("You didn't clean the Kitchen.");
//         }

//         // setTimeout(() => {
//         //     resolve("Cleaning the kitchen...");
//         // }, 2000);
//     });
// }

// function takeOutTrash() {
//     return new Promise((resolve, reject) => {

//         const tookOuttheTrash = false;
//         if(tookOuttheTrash) {
//             resolve("You took out the Trash.");
//         }
//         else {
//             reject("You didn't take out the Trash.");
//         }

//         // setTimeout(() => {
//         //     resolve("Taking out the trash...");
//         // }, 500);
//     });
// }

// walkDog().then(message => { console.log(message); return cleanKitchen(); })
//         .then((message) => { console.log(message); return takeOutTrash(); })
//         .then((message) => { console.log(message); console.log("All tasks completed!"); })
//         .catch(error => { console.error(error); });


// ASYNC AWAIT

function walkDog() {
    return new Promise((resolve, reject) => {

        const walkedtheDog = true;

        if(walkedtheDog) {
            resolve("You walk the Dog.");
        }

        else {
            reject("You didn't walk the Dog.");
        }
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        
        const cleanedtheKitchen = true;
        if(cleanedtheKitchen) {
            resolve("You cleaned the Kitchen.");
        }
        else {
            reject("You didn't clean the Kitchen.");
        }
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {

        const tookOuttheTrash = false;
        if(tookOuttheTrash) {
            resolve("You took out the Trash.");
        }
        else {
            reject("You didn't take out the Trash.");
        }
    });
}

async function doChores() {
    try {
        const walkMessage = await walkDog();
        console.log(walkMessage);
        const cleanMessage = await cleanKitchen();
        console.log(cleanMessage);
        const trashMessage = await takeOutTrash();
        console.log(trashMessage);
        console.log("All tasks completed!");    

    }
    catch(error) {
        console.error(error);
    }
}


doChores();