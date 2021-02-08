var arraySample = [4, 6, 9, 2]

// "object" - Arrays and objects have the same "type"
var arrayType = typeof arr

var argNum = 42
var argArr = [7, 8, 9, 10]

// Pass-by-value
// Primitive types like numbers, booleans, String, null, undefined
// Changing the variable(num) inside the function, doesn't change
//  the original variable argNum, because it's only copying it's value
function changeNum(num) {
  num++
  console.log({ num })
}
changeNum(argNum)
console.log({ argNum })

// Pass-by-reference
// Objects and arrays pass their memory location in the RAM, aka, they
// don't copy values, they change the original argument
function changeArr(arr) {
  if (arr.length > 0) {
    arr[0] = 100
  }
  console.log({ arr })
}
changeArr(argArr)
console.log({ argArr })

var arrConcat1 = [1, 2, 3]
var arrConcat2 = [4, 5, 6]
var concat12 = arrConcat1.concat(arrConcat2)

var arrConcat3 = [
  { name: "Tesla", age: 7 },
  { name: "Edison", age: 4 },
  { name: "Jermaine", age: 9043 }
]
var arrConcat4 = [
  { make: "Hyunday", model: "Elantra" },
  { make: "Tesla", model: "3" },
  { make: "Audi", model: "R8 Royal edition" }
]

var concat34 = arrConcat3.concat(arrConcat4)


// Tiers in increasing order:
// B, A, S
var sortArr = [
  { name: "Tesla", age: 7, tier: "A" },
  { name: "Edison", age: 4, tier: "B" },
  { name: "Jermaine", age: 18, tier: "B" },
  { name: "Puss", age: 13, tier: "A" },
  { name: "Arthur", age: 18, tier: "S" }
]

// Does nothing useful
sortArr.sort()

// by name
sortArr.sort(function (a, b) {
  if (a.name > b.name) return 1
  else if (a.name < b.name) return -1
  else return 0
})

// by age
sortArr.sort(function (a, b) {
  if (a.age > b.age) return 1
  else if (a.age < b.age) return -1
  else return 0
})

// Tiers in increasing order:
// B, A, S
var tiers = ["B", "A", "S"]
sortArr.sort(function (a, b) {
  var ai = tiers.indexOf(a.tier)
  var bi = tiers.indexOf(b.tier)
  if (ai > bi) return 1
  else if (ai < bi) return -1
  else return 0
})

// Tiers in increasing order, then by name
sortArr.sort(function (a, b) {
  var ai = tiers.indexOf(a.tier)
  var bi = tiers.indexOf(b.tier)
  if (ai > bi) return 1
  else if (ai < bi) return -1
  else {
    if (a.name > b.name) return 1
    else if (a.name < b.name) return -1
    else return 0
  }
})

var bigArr = []

for (var i = 0; i < 1000; i++) {
  bigArr[i] = i * Math.random()
}

var can = document.createElement('canvas')
can.width = 500
can.height = 500
document.body.appendChild(can)
var ctx = can.getContext('2d')
ctx.fillStyle = "white"
ctx.fillRect(0, 0, 500, 500)
ctx.fillStyle = "red"
ctx.fillRect(4, 0, 1, 500)
ctx.fillStyle = "black"

for (var i in bigArr) {
  ctx.fillRect(i, 0, 1, bigArr[i])
}

var pixData = ctx.getImageData(0, 0, 5, 5)
var pixels = []

for (var y = 0; y < pixData.height; y++) {
  pixels[y] = []
  for (var x = 0; x < pixData.width; x++) {
    var i = 4 * (pixData.width * y + x)
    var pix = {
      r: pixData.data[i],
      g: pixData.data[i + 1],
      b: pixData.data[i + 2],
      a: pixData.data[i + 3],
    }
    pixels[y][x] = pix
    if (pix.r == 255 && pix.b == 0 && pix.g == 0) {
      console.log(`red found at ${x + 1}x${y + 1}`)
    }
  }
}

let mineLocations = [
  [true, false, false, false, false, true],
  [false, false, false, false, false, true],
  [true, true, false, true, false, true],
  [true, false, false, false, false, false],
  [false, false, true, false, false, false],
  [false, false, false, false, false, false]
];

var scores = []

for (var i = 0; i < mineLocations.length; i++) {
  scores[i] = []
  for (var j = 0; j < mineLocations[i].length; j++) {
    let score = 0
    if (mineLocations[i][j]) {
      score = -1
    } else {



    }
    scores[i][j] = score
  }
}
