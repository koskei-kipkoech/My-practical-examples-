// const myCat = "kipp"
//console.log("global: ",myCat)

// function isCheekCute(){
//     let age = 9
//     if (myCat === "rose"){
//         let isCute = true
//     }
//     console.log(isCute)

// }
// isCheekCute()
// console.log(isCute)

// const loopThrougArray = function(array){
//     for(let item of array){
//         console.log(item);
//     }
// }
// const capitalizeArray = function(array){
//     let newArray = []
//     for (let item of array){
//         newArray.push(item.toUpperCase())
//     }
//     console.log(newArray)
// }


// function handleBooks(fun){
//     let books = ['Eloquent Javascript','Javascript the good part','Learn javascript','You dont know javascript', 'Javascript the definition guide']
//     fun(books)
// }
// handleBooks(loopThrougArray);
// handleBooks(capitalizeArray);

// let books = [
//     { 
//         title: 'Eloquent Javascript',
//         price: 20,
//         inventory: 8
//     },
//     { 
//         title: 'Javascript the good part',
//         price: 25,
//         inventory: 2
//     },
//     { 
//         title: 'Learn javascript',
//         price: 15,
//         inventory: 12
//     },
//     { 
//         title: 'You dont know javascript',
//         price: 30,
//         inventory: 10
//     },
//     { 
//         title: 'Javascript the definition guide',
//         price: 35,
//         inventory: 1
//     }
// ];
// function printreport(foo){
//     console.log(foo(books))
//     totalInventory(books)
// }
// function totalInventory(array){
//     let total = 0 
//     for(let item of array){
//         total += item.inventory
//     }
//     return `Total Inventory: ${total} items`
// }

// function replenish(array){
//     let replenishList = []
//     for(item of array){
//         if (item.inventory < 3){
//             replenishList.push(item.title)
//         }
//     }
//     return `Place order for : ${replenishList.join(', ')}`
// }

// printreport(totalInventory)
// printreport(replenish)



let books = [
    { 
        title: 'Eloquent Javascript',
        price: 20,
        inventory: 8
    },
    { 
        title: 'Javascript the good part',
        price: 25,
        inventory: 2
    },
    { 
        title: 'Learn javascript',
        price: 15,
        inventory: 12
    },
    { 
        title: 'You dont know javascript',
        price: 30,
        inventory: 10
    },
    { 
        title: 'Javascript the definition guide',
        price: 35,
        inventory: 1
    }
];
// function loopAndUpdate(array, updaterFoo){
//     const updatedArray = []
//     for(let item of array){
//         updatedArray.push(updaterFoo(item))
//     }
//     return updatedArray
// }

// const title = books.map((item) => item.title);
// console.log(item)
// function pricesFoo(item){
//     return item.price
// }
// console.log(books)

// const prices = books.map(pricesFoo)
// const inventory = books.map(item => item.inventory)

// const halfOff = books.map(item => {
//     let  itemCopy = Object.assign(({}, item))
//     itemCopy.price = Math.floor(itemCopy.price/2)
//     return itemCopy
// })



// function halfOffoo(item){
//     let itemCopy = Object.assign ({}, item) 
//     itemCopy.price = Math.floor(itemCopy.price/2)
//     return itemCopy
// }
// const halfOff = books.map(halfOffoo)
// console.log(halfOff)

//console.log(loopAndUpdate(books, halfOff))
/////////////////////////////////////////////////
// function loopThrougAndfind(inventory, finder){
//     let result = null 
//     for (let item of inventory){
//         if (finder(item)===true){
//             result = item
//             break
//         }
//     }
//     return result
// }
// const foundItem = books.find(book => book.title === 'Javascript the definition guide'
// )
// console.log (foundItem)
// //finds us a given book 
// function isBook(book){
//     return book.title === 'Javascript the definition guide'
// }
// //console.log(loopThrougAndfind (books , stockFirst))
// // function for firstbook to be restocked .
// function stockFirst(item){
//     return item.inventory < 3
// }

// const reducer = (accumulator , item) => {
//     console.log (accumulator, item)
//     // let total = item.price * item.inventory
//     return accumulator +" , "+ item.title
// }
// let total = books.reduce(reducer,'').substring(2)
// console.log (total)

// 
// books.forEach(function(item){
//     console.log(item.title.toLowerCase())
// })

const doubledAndSummed = [1, 2, 3].reduce(function (accumulator, element) {
    return element * 2 + accumulator;
}, 0);
console.log(doubledAndSummed)