let studentSahil = {
    firstName: "Sahil",
    lastName: "Aggarwal",

    getName: function () {
        console.log(this.firstName + " " + this.lastName);
    },

    getResult: function () {
        console.log("passed");
    }
}

let studentJasjot = {
    firstName: "jasjot",
    lastName: "Singh",
    getName: function () {
        console.log(this.firstName + " " + this.lastName);
    },

    getResult: function () {
        console.log("Passed");
    }
}

console.log(getStudent1);


getName.call(studentJasjot);
const getStudent1 = getName.call(studentSahil,"G16");
const getStudent2 = getName.call(studentJasjot,["G16,G15,G17"]);

const getStudentBind = getName.bind(studentSahil, "G16");
console.log(getStudentBind());


// var print = studentSahil.firstName + " " + studentSahil.lastName;
// console.log(print);
// studentSahil.getResult();


document.getElementById("searchBox").addEventListener("input", debouncingFunction);
let whichCall = 0;
function fetchData() {
    console.log("fetching API Data", whichCall++);
}

function debouncingFunction() {
    setTimeout(fetchData,2000)
}