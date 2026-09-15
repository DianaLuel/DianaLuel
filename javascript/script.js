function walkDog(callback) {
    
    setTimeout(() => {
        console.log("Walking the dog...");
    callback();
    }, 1500);
}

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log("Cleaning the kitchen...");
        callback();
    }, 1000);
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log("Taking out the trash...");
        callback();
    }, 500);
}


walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("All tasks completed!");
        })
    })
})