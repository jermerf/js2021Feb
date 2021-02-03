
class Animal {
  mass = 0
  constructor(mass) { this.mass = mass }
  makeMatingNoise() { }
}

class Cat extends Animal {
  name = ""
  age = 0
  constructor(name, age) {
    super(4)
    this.name = name
    this.age = age
  }
}

function verifyAnimal(anim) {
  if (anim instanceof Animal) {
    // Verify class
    console.log("is an animal:", anim)
  } else {
    console.log("Not animal", anim)
  }
}



module.exports = { Animal, Cat, verifyAnimal }