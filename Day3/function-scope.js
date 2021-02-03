const { verifyAnimal, Cat, Animal } = require('./src/verify')

// var x = 10
// var y = 20

// function scoped() {
//   console.log({ x, y })
//   var z = 30
//   let w = 40
//   if (w > 30) {
//     var u = 50
//     let v = 60
//   }

//   for (let i = 0; i < 10; i++) {
//     console.log(i)
//   }

// }

// scoped()

// class Rooter {
//   _sqrtNum = 4

//   get sqrtNum() {
//     return this._sqrtNum
//   }
//   set sqrtNum(val) {
//     this._sqrtNum = Math.abs(val)
//   }
//   root() {
//     return Math.sqrt(this._sqrtNum)
//   }
// }

// var myRooter = new Rooter()

// myRooter.sqrtNum = -2

// console.log(myRooter.root())



// function showingArgs() {
//   console.log(arguments)
// }

// showingArgs()
// showingArgs(null)
// showingArgs(undefined)
// showingArgs(1)
// showingArgs(true)
// showingArgs(true, "Cows")
// showingArgs(true, "Chickens", false, "Cat Idols")

// console.log(`---------- Bad Args ----------`)

// function manyBadArgs(a, b) {
//   if (typeof a === 'undefined') {
//     console.log(`a is not defined`)
//   }
//   if (typeof (b) === 'undefined') {
//     console.log(`b is not defined`)
//   }
// }

// console.log("manyBadArgs()")
// manyBadArgs()
// console.log("manyBadArgs(true, false)")
// manyBadArgs(true, false)
// console.log("manyBadArgs(0, 0)")
// manyBadArgs(0, 0)




function verifyType(kitty) {
  if (kitty instanceof Cat) {
    // Verify class
    console.log("is cat:", kitty)
  } else {
    console.log("Dog in disguise", kitty)
  }
}

console.log(`verifyType()`)
verifyType()

var tesla = new Cat("Tesla Yin", 7)
var jackelope = new Animal(5)

console.log(`verifyType(tesla)`)
verifyType(tesla)

console.log(`verifyType({
  name: "Edison Yang",
  age: 4
})`)
verifyType({
  name: "Edison Yang",
  age: 4
})


verifyAnimal(jackelope)
verifyAnimal(tesla)



