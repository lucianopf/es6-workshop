// --- Block scoped example ---
// function example () {
//   if (true) {
//     var myVar = 100
//     let myLet = 200
//   }
//   console.log(myVar)
//   console.log(myLet)
// }

// function example () {
//   let arr = []
//   for (let i=0; i < 3; i++) {
//       arr.push(i)
//   }
//   console.log(arr)
//   console.log(i)
// }

// --- Variable hoisting ---
// function example () {
//   if (true) {
//     console.log(myVar)
//     console.log(myLet)
//     var myVar = 100
//     let myLet = 200
//   }
// }

// --- Single declaration ---
// function example () {
//   if (true) {
//     var myVar = 100
//     let myLet = 200
//     var myVar = 100
//     let myLet = 200
//   }
// }

// --- Const example ---
// function example () {
//   const myConst = 100
//   myConst=200
//   // const myConst2
// }

// --- Const Objects ---
// function example () {
//   const me = {}
//   me.name = 'Paul'
//   console.log(me)
//   // me = {}
//   // const people = []
//   // people.push({})
//   // people = [1,2,3]
// }

// --- Const solution ---
// function example () {
//   const me = Object.freeze({})
//   me.name = 'Paul'
//   console.log(me)
// }

example()