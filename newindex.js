// console.log("Hello World") ==> commets
// let name = 'patrick kipkoech'//string
// let age = 30;//number
// let isApproved = true; //boolean 
// let firstName = undefined;
// let selectedColor = null;

// const intrestRate = 0.3;
// intrestRate = 1;
// console.log (intrestRate)

// const people = [
//     {
//         name: "Dom",
//         age: 35,
//         occupation: "Web Developer"
//     },
//     {
//         name: "Any",
//         age: 26,
//         occupation: "Nurse"
//     },
//     {
//         name: "Bruce",
//         age: 55,
//         occupation: "Electrician"
//     }
// ];
// const names = people.map(person => {
//     return person.name
// });

// const overThirty = people.filter(person =>{
//     return person.age >= 30;
// }).map(person =>{
//     return person.name;
// });

// const totalAge = people.reduce((total,person)=>{
//     return total + person.age
// },0);
// console.log(totalAge)

// const items = [
//     {name:'Bike',  price: 100},
//     {name:'TV',  price: 200},
//     {name:'Album',  price: 10},
//     {name:'Books',  price: 5},
//     {name:'Phone',  price: 500},
//     {name:'Computer',  price: 1000},
//     {name:'Keyboard',  price: 25}
// ]
// const itemsNames = items.reduce((value,item)=>{
//     return value + item.price;
// },0);
// console.log(itemsNames)

//console.log(document.querySelectorAll('input'))
// let form = document.querySelector('form')
// console.log(form.parentNode)

// let work = document.querySelector('#todos')
// let newWork = work.querySelector('h4')
// console.log(newWork.innerText = 'Sunday')
function updateDay(day){
    let h4 = document.querySelector('h4')
    h4.innerHTML =`
    <h1>${day}</h1>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/362px-Cat_August_2010-4.jpg"/>
    <p>TGIF</p>
    `
}
updateDay('Sunday')
