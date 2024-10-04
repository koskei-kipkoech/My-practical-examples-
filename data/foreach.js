// oppressedWorkers = [
//     "Dopey",
//     "Sneezy",
//     "Happy",
//     "Angry",
//     "Doc",
//     "Lemonjello",
//     "Sleepy",
// ];

// oppressedWorkers.forEach(function (oppressedWorker) {
//     console.log(`${oppressedWorker} wants to form a union!`);
// });

// function addFullNameToEmployees(empCollection) {
//     empCollection.forEach(function (e) {
//         e.fullName = `${e.firstName} ${e.familyName}`;
//     });
// }

// addFullNameToEmployees([
//     { firstName: "Byron", familyName: "Karbitii" },
//     { firstName: "Luca", familyName: "Tuexedensis" },
// ]);
// addFullNameToEmployees()

// const phrases = {
//     greeting: "Hello there!",
//     time: () => {
//         const currentTime = new Date();
//         return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`;
//     }
// }

// console.log(phrases.greeting);
// console.log(phrases.time());
// function add(a, b, c) {
//     return a + b + c ;
// }
// const arr = [1, 2, 3];
// console.log(add(...arr));

function muppetLab(a, b, ...muppets) {
    console.log(a, ' ', b); // LOG: Dr. Bunson Beaker
    console.log(muppets); // LOG: ["Miss Piggy", "Kermit", "Animal"]
    console.log(muppets[0]); // LOG: Miss Piggy
    console.log(muppets.length); // LOG: 3
}
muppetLab("Dr. Bunson", "Beaker", "Miss Piggy", "Kermit", "Animal");