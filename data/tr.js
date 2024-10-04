// // const fruit = "Apple";

// // function first() {
// //     const vegetable = "Broccoli";

// //     console.log("fruit:", fruit);
// //     console.log("vegetable:", vegetable);
// //     console.log("legume:", legume);
// // }
// // console.log(first)
// // function second() {
// //     const legume = "Peanut";

// //     console.log("fruit:", fruit);
// //     console.log("legume:", legume);
// //     console.log("vegetable:", vegetable);
// // }
// // second()

// // const egregiouslyNestedArray = [
// //     "How",
// //     ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
// //     "seems.",
// // ];
// // console.log(egregiouslyNestedArray[0])
// // console.log(egregiouslyNestedArray[1][1])
// // console.log(egregiouslyNestedArray[2])

// const board = [
//     ["X", "O", " "],
//     [" ", "X", "O"],
//     ["X", " ", "O"],
// ];

// board.push("cat")
// board.unshift('mary')
// console.log(board);

// const superHeroes = ["Catwoman", "Storm", "Jessica Jones"]
// superHeroes.push('Wonder Woman')
// superHeroes.unshift('Green Laten')
// console.log(superHeroes)

// const copyOfCoolCities = [...superHeroes,'Wonderwoman']
// console.log(copyOfCoolCities)
// console.log(superHeroes.shift())

// const primeNumbers = [2,3, 5, 7, 11]
// console.log(primeNumbers.splice(-2))
// const cards = [
//     "Ace of Spades",
//     "Jack of Clubs",
//     "Nine of Clubs",
//     "Nine of Diamonds",
//     "Three of Hearts",
// ];
// console.log(cards.splice(2, 0, "Ace of Clubs"));
// cards[3] = "Ace f people"
// console.log(cards)

// const object = {
//     key1: value1,
//     key2: {
//         innerKey1: innerValue1,
//         innerKey2: innerValue2,
//     },
// };
// console.log(object.key1)

// const meals = {
//     breakfast: "Avocado toast",
//     lunch: "Oatmeal",
//     dinner: "Scrambled Eggs",
// };
// console.log(meals);
// console.log(meals.breakfast);
// console.log(meals.dinner);
// console.log(meals["lunch"]);

// const wildKeys = {
//     "Cash rules everything around me.": "Wu",
//     "C.R.E.A.M.": "Tang",
//     "Get the money.": "For",
//     "$ $ bill, y'all!": "Ever",
// };
// console.log(Object.keys(wildKeys));
// console.log(Object.values(wildKeys));


// const circle = {}
// circle.radius = 5;
// circle["diameter"] = 10
// circle.circumference = circle.diameter * Math.PI
// circle["area"] = Math.PI*circle.radius**2
// console.log(circle)

// const mondayMenu = {
//     cheesePlate: {
//         soft: "Chèvre",
//         semiSoft: "Gruyère",
//         hard: "Manchego",
//     },
//     fries: "Curly",
//     salad: "Cobb",
// };
// mondayMenu.fries = "Sweet Potato"
// mondayMenu["salad"] = "Sweet Corn"
// console.log(delete mondayMenu.salad)
// console.log(mondayMenu)
// function destructivelyUpdateObject(obj, key, value) {
//     obj[key] = value;
//     return obj;
// }
// const tuesdaMenu = destructivelyUpdateObject(mondayMenu, "salad", "sweet corn")
// console.log(tuesdaMenu)

// const myArray = []
// myArray[0] = "we will see"
// myArray.summary = "Empty Array"
// myArray["summary"] = "This Array is Totaly empty"
// myArray.push(2,3,4,5)
// console.log(myArray)
// console.log(myArray[myArray.length -1])

// console.log(myArray.summary)

const family = {
    mother: {
        firstName: "Susan",
        lastName: "Doyle",
        age: 32,
    },
    father: {
        firstName: "John",
        lastName: "Doyle",
        age: 33,
    },
    daughter: {
        firstName: "Lily",
        lastName: "Doyle",
        age: 5,
        },
    son: {
        firstName: "Mike",
        lastName: "Doyle",
        age: 8,
    },
};
console.table(family)