// f(x) = 5x^2 - 3x^4 - 5 + x

// function fof(x) {
//   return 5 * x * x - 3 * Math.pow(x, 4) - 5 + x
// }

// console.log("fof(0.377227429) = -3.97201823")
// console.log(fof(0.377227429))


// function evenLeibniz(n) {
//   var sum = 0
//   // add even numbers and alternate signs
//   for (var i = 1; i < n; i++) {
//     var sign = 1
//     if (i % 2 == 0) {
//       sign = -1
//     }
//     sum += sign / (2 * i)
//   }
//   return sum
// }

// console.log(evenLeibniz(10))


function perfectDivisors(n) {
  var divisors = [1]
  for (var i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      divisors.push(i)
    }
  }
  var sumDiv = 0
  for (var div of divisors) {
    sumDiv += div
  }
  if (n === sumDiv) {
    return divisors
  }
}

var before = Date.now()
for (var i = 1; i <= 60000; i++) {
  let divisors = perfectDivisors(i)
  if (divisors) {
    console.log(i, divisors)
  }
}
var runTime = Date.now() - before
console.log("Completed in " + runTime + "ms")