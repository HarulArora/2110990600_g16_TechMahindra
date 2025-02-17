// function a() {
//     console.log("Function a");
// }

// function b(x) {
//     console.log("Function b");
//     a();
// }

// b(a());

// var count = 0;
// document.getElementById("button-click-1").addEventListener("click", function () {
//     count++;
//     console.log(count);
// })
// document.getElementById("button-click-2").addEventListener("click", function () {
//     count++;
//     console.log(count);
// })



// Task -> 
function reachedRestaurant(callback) {
    console.log("You reached");
    setTimeout(callback, 1000);
}

function tableFinding(callback) {
    console.log("Table Finding");
    setTimeout(callback, 1000);
}

function menuDiscover(callback) {
    console.log("Menu Discover")
    setTimeout(callback, 1000);
}

function priceCheck(callback) {
    console.log("Price Check");
    setTimeout(callback, 1000);
}

function starterOrder(callback) {
    console.log("Starter Order");
    setTimeout(callback, 1000);
}

function mainCourse(callback) {
    console.log("Main Course");
    setTimeout(callback, 1000);
}

function dessert(callback) {
    console.log("Dessert");
    setTimeout(callback, 1000);
}

function payBill(callback) {
    console.log("Pay Bill");
    setTimeout(callback, 1000);
}
reachedRestaurant(() => {
    tableFinding(() => {
        menuDiscover(() => {
            priceCheck(() => {
                starterOrder(() => {
                    mainCourse(() => {
                        dessert(() => {
                            payBill(() => {
                            })
                        })
                    })
                })
            })
        })
    })
})



