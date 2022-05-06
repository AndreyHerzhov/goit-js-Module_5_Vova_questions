/*
 *  Одна функція
 */

// const makeShef = function (name) { // - все, що всередині фігурних  дужок є локальна область бачення.
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`)
//     }
//     return makeDish; // function (dish) {
//         // console.log(`${name} готовит ${dish}`)
//     // }
// }

// const mango = makeShef('Mango') // Mango scope + Global scope = Lexical environment
// // name = Mango
// console.log(mango)
// mango('Soup')


// const poly = makeShef('Poly') // Poly scope + Global scope = Lexical environment
// // name = Poly
// console.log(poly) // ƒ (dish) {
//                  // console.log(`${name} готовит ${dish}`)
//                 // }
// poly('Tee') // poly став функцією, з логікою makeDish()


/*
 *  Дві функції
 */

const makeShef = function (name) { // - все, що всередині фігурних  дужок є локальна область бачення.
    const makeDish = function (dish) {
        console.log(`${name} готовит ${dish}`)
    }

    const makeSoup = function (dish) {
        console.log(`${name} будет готовит ${dish}`)
    }
    return{ makeDish, makeSoup}; 
}

const mango = makeShef('Mango')
mango.makeDish('Salad') // Mango готовит Salad
mango.makeSoup('Bograch') // Mango будет готовит Bograch