const path = require('path')
const fs = require('fs')

const searchDir = "C:\\Users\\jermaine.francoeur\\tmp\\vue-default"

function showFilesIn(fileDir, depth = 0) {
  var stats = fs.statSync(fileDir)
  var indent = "\t".repeat(depth)
  console.log(indent + path.basename(fileDir))

  if (stats.isDirectory()) {
    var files = fs.readdirSync(fileDir)
    for (var f of files) {
      showFilesIn(path.join(fileDir, f), depth + 1)
    }
  }
}

showFilesIn(searchDir)

console.log(__dirname)


var x = 42
if (typeof x === "number") {

}