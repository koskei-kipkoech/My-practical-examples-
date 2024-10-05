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
// function updateDay(day){
//     let h4 = document.querySelector('h4')
//     h4.innerHTML =`
//     <h1>${day}</h1>
//     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/362px-Cat_August_2010-4.jpg"/>
//     <p>TGIF</p>
//     `
// }
// updateDay('Sunday')

//new


//create an alert
// document.querySelector('#alert').addEventListener('click', alertMe)

// function alertMe(){
//     return alert('Hi! I was clicked')
// } 

// document.querySelector('#log').addEventListener('click',()=> console.log('I have been loged'))

// //callback that delete task
// function handleDelete(e){
//     e.target.parentNode.remove()
// }

// //grab button and delete parent nodes.
// function addEventListenerDeleteButton(){
//     let buttons = document.getElementsByClassName('delete-btn')
//     for(let btn of buttons){
//         btn.addEventListener('click', handleDelete)
//     }
// }
// addEventListenerDeleteButton()

document.addEventListener('DOMContentLoaded', ()=> {
    let form = document.querySelector('form')
    form.addEventListener('submit',(e) => {
        e.preventDefault()
        buildToDo(e.target.new_todo.value)
        form.reset()
    })
})

function buildToDo(todo){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click',handleDelete)
    btn.textContent = ' X '
    p.textContent = ` ${todo} `
    p.appendChild(btn)
    console.log(p)
    document.querySelector("#todo_container").appendChild(p)
}

function handleDelete(e){
    e.target.parentNode.remove()
}