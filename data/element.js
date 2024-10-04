// const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];
// console.log(cards.indexOf('queen of hearts'))
// console.log(cards.indexOf('jack of clubs'))
// console.log(cards.indexOf('ten of diamonds'))
// console.log(cards.indexOf('ace of spades'))


// function isOdd(element, index, array) {
//     return (element % 2 === 1);
// }
// console.log([4, 6, 8, 10].find(isOdd)); //=> undefined, not found
// console.log([4, 5, 8, 10].find(isOdd)); //=> 5
// console.log([4, 5, 7, 8, 10].find(isOdd)); //=> 5
// console.log([4, 7, 5,  8, 10].find(isOdd));

const users = [
    {
        firstName: "Niky",
        lastName: "Morgan",
        favoriteColor: "Blue",
        favoriteAnimal: "Jaguar",
    },
    {
        firstName: "Tracy",
        lastName: "Lum",
        favoriteColor: "Yellow",
        favoriteAnimal: "Penguin",
    },
    {
        firstName: "Josh",
        lastName: "Rowley",
        favoriteColor: "Blue",
        favoriteAnimal: "Penguin",
    },
    {
        firstName: "Kate",
        lastName: "Travers",
        favoriteColor: "Red",
        favoriteAnimal: "Jaguar",
    },
    {
        firstName: "Avidor",
        lastName: "Turkewitz",
        favoriteColor: "Blue",
        favoriteAnimal: "Penguin",
    },
    {
        firstName: "Drew",
        lastName: "Price",
        favoriteColor: "Yellow",
        favoriteAnimal: "Elephant",
    },
];
function filter(collection, attribute1, value1 ,attribute2,value2){
    for(const user of collection){
        // if (user.favoriteColor === color){
        //     console.log(user.firstName)
        // }
        if (user[attribute1] === value1 && user[attribute2] === value2){
            console.log(user.firstName)
        }
    }
}
//firstNamePrinter(users, "Red")
filter(users, "favoriteAnimal","Jaguar","favoriteColor","Blue")

function filter(collection) {
    for (const user of collection) {
        if (likesElephants(user)) {
        console.log(user.firstName);
        }
    }
}
function likesElephants(user) {
    return user["favoriteAnimal"] === "Elephant";
}
filter(users);