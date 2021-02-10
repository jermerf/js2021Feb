var timeBefore = Date.now()

var sum = 0
for (var i = 0; i < 2000000000; i++) {
  sum += i
}

var timeAfter = Date.now()

var totalTime = timeAfter - timeBefore

console.log("TOTAL TIME WAS ", totalTime)