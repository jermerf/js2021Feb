
function justIfs(n = 1000001) {
  // Conditional
  if (n > 500) {
    console.log(`Large number`)
  }

  // Alternative
  if (n % 2 === 0) {
    console.log(`Even number`)
  } else {
    console.log(`Odd number`)
  }


  // Single criterion acceptance
  // if-elseif clause only enter ONE possible block.
  // Then will enter the first TRUE block
  if (n === 1001) {
    console.log(`Dalmations!`)
  } else if (n > 500) {
    console.log(`Large number`)
  } else if (n % 2 === 0) {
    console.log(`Even number`)
  } else {
    console.log(`The runt of the litter`)
  }

  // Rewards for loyalty card tiers
  console.log(`------ Rewards ------`)
  let tier = 0
  if (n => 100) tier = 4
  if (n => 1000) tier = 3
  if (n => 100000) tier = 2
  if (n => 1000000) tier = 1
  // Downside of switch, no range, only exact values
  switch (tier) {
    case 1:
      console.log(`You qualify for a CAR!!!`)
    case 2:
      console.log(`You qualify for a iPad`)
    case 3:
      console.log(`You qualify for a hat`)
    case 4:
      console.log(`You qualify for a pen`)
      break
    case 0:
      console.log(`No points, le sad.......`)
    default:
      console.log(`---- Default --`)
  }


  let name = "tesla"

  switch (name) {
    case "tesla": console.log(`Meow`); break
    case "edison": console.log(`Mbreowo`); break
  }


}


justIfs()
