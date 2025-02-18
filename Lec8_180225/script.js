// const calculateDoubleData = function (data) {
//     const output = [];
//     for (let i = 0; i < data.length; i++){
//         output.push(data[i] * 2);
//     }
//     return output;
// }




// const calculatehalfData = function (data) {
//     const output = [];
//     for (let i = 0; i < data.length; i++){
//         output.push(data[i] / 2);
//     }
//     return output;
// }




// const calculateAddTen = function (data) {
//     const output = [];
//     for (let i = 0; i < data.length; i++){
//         output.push(data[i] + 10);
//     }
//     return output;
// }





// console.log(calculateDoubleData(data));
// console.log(calculateHalfData(data));
// console.log(calculateAddTen(data));



// var insideData = 10;

// function doubleData(insideData) {
//     var ans = insideData * 2;
//     return ans;
// }

// function halfData(insideData) {
//     var ans = insideData / 2;
//     return ans;
// }

// function addTen(insideData) {
//     var ans = insideData + 10;
//     return ans;
// }

// const calculateData = function (data, callback) {
//     console.log("We are inside calculateData");
//     var output = [];
//     for (let i = 0; i < data.length; i++){
//         output.push(callback(data[i]));
//     }
//     return output;
// }


// console.log(calculateData(data, doubleData));
// console.log(calculateData(data, halfData));
// console.log(calculateData(data, addTen));




// Array.prototype.mapp = function (logic) {
//     var output = [];
//     for (let i = 0; i < this.length; i++){
//         output.push(this[i]);
//     }
//     return output;
// }

// console.log(DataTransfer.mapp(doubleData));




const users = [{ firstName: "Harul", lastName: "Arora", age: 21 },
{ firstName: "Piyush", lastName: "Arora", age: 25 },
{ firstName: "Harsh", lastName: "Jain", age: 22 },
{ firstName: "Yo", lastName: "Yo", age: 63 }
]

// Combine first name and last name
const fullName = users.map((user) => {
    user.firstName + " " + user.lastName
});


// Filter out age above 24 and their full name
const filteredUsersFullNames = users
    .filter((user) => user.age > 24)
    .map((user) => user.firstName + " " + user.lastName);
