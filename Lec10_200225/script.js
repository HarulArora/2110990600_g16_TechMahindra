// // promise.all
// // promise.allSettled    (not show rejections)
// // prmise.race       ()
// // promise.any


// // Promise api

// const myPromiseFromNetflix = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("Fetched Data from Netflix");
//     }, 1000)
// });

// const myPromiseFromTwitter = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("Fetched Data from Twitter");
//     }, 2000)
// });


// const myPromiseFromGitHub = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("Fetched Data from Github");
//     }, 3000)
// });


// const myPromiseFromHotstar = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("Fetched Data from HotStar");
//     }, 4000)
// });



// // const dataFromAll=Promise.all([myPromiseFromNetflix,myPromiseFromTwitter,myPromiseFromGitHub,myPromiseFromHotstar])

// // console.log(dataFromAll)

// const dataRace = Promise.race([myPromiseFromNetflix, myPromiseFromTwitter, myPromiseFromGitHub, myPromiseFromHotstar]);
// console.log(dataRace);





// const projectSubmissionByKuber = new Promise(function (res, rej) {
//     setTimeout(() => {
//         res("SUBMITTED PROJECT SUCCESSFULLY");
//     }, 5000);
// });

// async function projectEvaluation() {
//     const projectFile = await projectSubmissionByKuber;
//     console.log(projectFile);
// }

// projectEvaluation();



console.log("Start");
const projectSubHarul = new Promise(function (res, req) {
    setTimeout(() => {
        res("File check Evaluation");
    }, 10000);
});

// async function projectEvaluation() {
//     console.log("Attendance Marking");
//     const 
// }