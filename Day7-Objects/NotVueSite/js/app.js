/* Special Attributes
  clicked - Handles onclick events
*/

const eventAttributes = {
  clicked: "click",
  mmove: "mousemove",
  kdown: "keydown"
}


function setupApp(app) {
  if (typeof app !== 'object' || Array.isArray(app)) {
    console.error("Not a config object")
    return
  }
  let { appSelector, title, copyright, preferences } = app
  if (!title || !copyright || !preferences) {
    console.error("Missing required properties", { title, copyright, preferences })
    return
  }
  document.querySelector('title').innerText = title
  var copyrightDiv = document.createElement('div')
  copyrightDiv.innerText = `Copyright © ${copyright}`
  document.body.appendChild(copyrightDiv)

  // Setup event handler
  for (var attr in eventAttributes) {
    var handlers = document.querySelectorAll(`[${attr}]`)
    for (var tag of handlers) {
      var handlerName = tag.getAttribute(attr)
      var handler = app[handlerName]
      if (typeof handler !== 'function') {
        console.error(`Handler for '${handlerName}' is not a function`)
        return
      }
      tag.addEventListener(eventAttributes[attr], handler)
    }
  }

  // Setup data binding
  let appTag = document.querySelector(app.appSelector)
  window.app = app
  var firstSplit = appTag.innerHTML.split("{{")
  var rebuild = firstSplit[0]
  for (var i = 1; i < firstSplit.length; i++) {
    var secondSplit = firstSplit[i].split("}}")
    var boundName = secondSplit[0]
    var tag = makeUniqueWatcherTag()
    if (!app.bound[boundName]) {
      console.error("Bad bound value ", boundName)
      return
    }
    if (!app[boundName]) {
      app[boundName] = new Observable(app.bound[boundName])
    }
    app[boundName].observers.push({ id: tag.id })
    rebuild += tag.outerHTML + secondSplit.slice(1).join("")
  }
  appTag.innerHTML = rebuild
  for (let k in app.bound) {
    app[k].value = app[k].value
  }
}

var vueObj = {
  data: {
    // variables
    myName: "Jermaine"
  },
  methods: {
    // functions
  }
}

class Observable {
  _value = null
  observers = []
  constructor(val) {
    this._value = val
  }
  set value(val) {
    this._value = val
    for (var obs of this.observers) {
      document.getElementById(obs.id).innerText = val
    }
  }
  get value() {
    return this._value
  }

}

function makeUniqueWatcherTag() {
  var id = "b" + Math.round(Math.random() * 100000000000)
  var span = document.createElement('span')
  span.id = id
  return span
}

setupApp({
  appSelector: "#app",
  title: "Tesla has taken over, run. Save yourself...",
  copyright: 2021,
  notes: [],
  preferences: {
    darkMode: false,
    largeText: false
  },
  bound: {
    myValue: "Chicken soup",
    cow: "Moo"
  },
  login() {
    alert("Logged in")
  },
  register() {
    alert("Registered Successfully")
  },
  mouseMovedOverMe(event) {
    console.log(event)
  },
  pushedAKey(event) {
    console.log(event)
  }
})


