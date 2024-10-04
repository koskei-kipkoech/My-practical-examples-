// // function map(array, callback) {
// //     for (const element of array) {
// //         callback(element);
// //     }
// // }

// // map([1, 2, 3], function (num) {
// //     console.log(num ** num);
// //     return 
// // });
// function map(array, callback) {
//     const newArr = [];

//     for (const element of array) {
//         newArr.push(callback(element));
//     }
// }
// const originalNumbers = [1, 2, 3, 4, 5];
// const squaredNumbers = map(originalNumbers, function (num) {
//     return num * num;
// });
// console.log(originalNumbers)
// console.log(squaredNumbers)
function map(array, callback) {
    const newArr = [];

    for (const element of array) {
        newArr.push(callback(element));
    }

    return newArr;
}

const oldAccounts = [
    { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
];
const newEngineers = map(oldAccounts, function (account) {
    return Object.assign({}, account, { accessLevel: "admin" });
});
const userIDs = map(newEngineers, function (eng) {
    return eng.userID;
});

console.log(userIDs);
//console.log(oldAccounts);
//console.log(newEngineers);