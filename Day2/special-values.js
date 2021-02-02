
let v = NaN

// Cannot use comparisons for NaN
if (v == NaN) {
  console.log(`It's NaN, but you'll never see this`)
}

// Must use isNaN()
if (isNaN(v)) {
  console.log(`It's NaN`)
}

v = Infinity

// CAN use comparisons for Infinity
if (v == Infinity) {
  console.log(`It's Infinity`)
}

// Also has isFinite()
if (isFinite(v)) {
  console.log(`It's a non-infinity number`)
}