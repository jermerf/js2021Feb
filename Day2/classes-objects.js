// Literals are given a direct value
var sentence = "The rain is spain falls wetly on Jermaine"
var obj = {
  name: "Tesla",
  age: 7,
  feet: {
    frontLeft: true,
    frontRight: true,
    backLeft: false,
    backRight: true
  }
}

console.log(obj.name)
console.log("Has front-right foot: ", obj.feet.frontRight)

console.log(`------ Classes ------`)

// Old classes - Prototype based
function OldCat(name, age) {
  this.name = name
  this.age = age
}
OldCat.prototype.describe = function () {
  console.log(`The cat "${this.name}" is aged ${this.age}`)
}
var puss = new OldCat("Puss D Boots", 14)
puss.describe()

class Animal {
  _weight = 10
  constructor(weight) {
    this.weight = weight
  }
  get weight() {
    return this._weight
  }
  set weighty(val) {
    this._weight = val
    if (val < 5) {
      console.log(`So teeny tiny`)
    }
  }
}

class Cat extends Animal {
  name = ""
  age = 0
  constructor(name, age, weight) {
    super(weight)
    this.name = name
    this.age = age
  }

  describe() {
    console.log(`The cat "${this.name}" is aged ${this.age} and weighs ${this.weight}`)
  }
}

var tesla = new Cat("Tesla", 7, 7)
tesla.describe()
tesla.weight = 4
