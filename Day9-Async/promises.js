/* Promises - Resolved or Rejected

var delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 2000)
})

delayedPromise.then(() => {
  console.log("Complete the promise (resolved)")
}).catch(() => {
  console.log("Rejected, so sad")
})




function regiserClicked() {
  var username = "steven2021" // document.getElementById('userbox')
  var password = "p@ssW$#d" // document.getElementById('passbox')

  // jQuery
  // $.post("/register", { username, password}, (res) => { })

  // axios
  // axios.post("/register", { username, password}).then((res) => { })
  ajax("/register", { username, password })
    .then(res => {
      console.log("Registered successfully", res)
      return ajax("/login", { username, password })
    }).then(res => {
      console.log("Logged in successfully", res)
      return ajax("/list", { username, password })
    }).then(res => {
      console.log("List acquired", res.list)
    })
}

regiserClicked()


function ajax(route, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        route,
        data,
        list: [
          { name: "Tesla", age: 7 },
          { name: "Edison", age: 4 },
          { name: "Puss", age: 13 }
        ]
      })
    }, 1000)
  })
}





function mySync() {
  return 21
}

async function myAsync() {
  return "I'm not synchronized!"
}



myAsync().then(res => {
  // console.log(res)
})

async function myDelayedAsync(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Timer done")
    }, time)
  })
}

// Await can ONLY be used inside an async function

async function myAwaitingFunction() {
  console.log("Starting awaiting...")
  console.log("mySync", mySync())
  console.log("myAsync", await myAsync())
  console.log("myDelayedAsync", await myDelayedAsync(1000))
  console.log("mySync", mySync())
  console.log("myAsync", await myAsync())
  console.log("myDelayedAsync", await myDelayedAsync(1000))
}

myAwaitingFunction()


function myAwaitingFunction() {
  return new Promise((resolve, reject) => {
    console.log("Starting awaiting...")
    console.log("mySync", mySync())
    return myAsync()
  }).then(val => {
    console.log("myAsync", val)
    return myDelayedAsync(1000)
  }).then(val => {
    console.log("myDelayedAsync", val)
    console.log("mySync", mySync())
    return myAsync()
  }).then(val => {
    console.log("myAsync", val)
    return myDelayedAsync(1000)
  }).then(val => {
    console.log("myDelayedAsync", val)
  })
}


function registerClickedSync(){
  axios.post("/register", { username, password}).then((res) => { 
    app.loggedIn = true
    app.username = res.username
    app.preferences = res.preferences

  })
}

async function registerClickedAsyncAwait(){
  let res = await axios.post("/register", { username, password})
  app.loggedIn = true
  app.username = res.username
  app.preferences = res.preferences
}




async function regiserClicked() {
  var username = "steven2021" // document.getElementById('userbox')
  var password = "p@ssW$#d" // document.getElementById('passbox')

  let res = await ajax("/register", { username, password })
  console.log("Registered successfully", res)
  res = await ajax("/login", { username, password })
  console.log("Logged in successfully", res)
  res = await ajax("/list", { username, password })
  console.log("List acquired", res.list)

    ajax("/register", { username, password })
    .then(res => {
      console.log("Registered successfully", res)
      return ajax("/login", { username, password })
    }).then(res => {
      console.log("Logged in successfully", res)
      return ajax("/list", { username, password })
    }).then(res => {
      console.log("List acquired", res.list)
    })
}

regiserClicked()


function ajax(route, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        route,
        data,
        list: [
          { name: "Tesla", age: 7 },
          { name: "Edison", age: 4 },
          { name: "Puss", age: 13 }
        ]
      })
    }, 1000)
  })
}

*/
// Catching errors ----


async function regiserClicked() {
  var username = "steven2021" // document.getElementById('userbox')
  var password = "p@ssW$#d" // document.getElementById('passbox')

  // Async/await use try/catch
  try {
    let res = await ajax("/register", { username, password })
    console.log("Registered successfully", res)
    res = await ajax("/login", { username, password })
    console.log("Logged in successfully", res)
    res = await ajax("/list", { username, password })
    console.log("List acquired", res.list)
  } catch (err) {
    console.log("error: ", err)
  }

  // Promises use the catch(callback)
  // ajax("/register", { username, password })
  //   .catch(error => {
  //     console.log("1 Registration failed", error)
  //     return 88
  //   })
  //   .then(res => {
  //     console.log("Registered successfully", res)
  //     return ajax("/login", { username, password })
  //   })
  //   .catch(error => {
  //     console.log("2 Login failed", error)
  //     return 88
  //   })
  //   .then(res => {
  //     console.log("Logged in successfully", res)
  //     return ajax("/list", { username, password })
  //   })
  //   .catch(error => {
  //     console.log("2 Login failed", error)
  //     return 88
  //   })
  //   .then(res => {
  //     console.log("List acquired", res.list)
  //   })
}

regiserClicked()


function ajax(route, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        reject("Ajax request timed out")
      } else {
        resolve({
          route,
          data,
          list: [
            { name: "Tesla", age: 7 },
            { name: "Edison", age: 4 },
            { name: "Puss", age: 13 }
          ]
        })
      }
    }, 500)
  })
}