/*
 * => стрілка свого контексту немає, але може викорстовувати той контекст, в якому вона створена.
 * У звичайної функції контекст визначаеться в момент запуску.
 * У стрілки - контекст в момент її створення.
 * 
 */



// function showThis () {
//     console.log(this) // Window 
//     // this - є контекст
// }

// const arrow = () => {
//     console.log(this) // Window 
//     // this - відсутній. Контексту у стрілки немає.
// }

// showThis();
// arrow();


// const user = {
//     name: 'Bob',
//     age: 24,
//     showThis() {
//         console.log(this)
//     },
//     arrow: () => {
//         console.log(this)
//     }

// }

// user.showThis(); // {name: 'Bob', age: 24, showThis: ƒ, arrow: ƒ}
// user.arrow(); // Window 

const user = {
    name: 'Bob',
    age: 24,
    showThis() {
        console.log(this) // {name: 'Bob', age: 24, showThis: ƒ} 
        const arrow = () => {
            console.log(this) // {name: 'Bob', age: 24, showThis: ƒ}
        }
        arrow() // 
    },
}

// user.showThis(); // {name: 'Bob', age: 24, showThis: ƒ, arrow: ƒ}
