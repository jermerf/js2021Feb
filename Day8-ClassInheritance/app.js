const express = require('express')

const PORT = process.env.PORT || 8080

var app = express()

// Logging before routing
app.use((req, res, next) => {
  console.log("[In a DB] Request to ", req.path)
  next()
})

// Handled routes
app.get('/', (req, res) => {
  res.status(200)
  res.type("html")
  res.send("Hello world")
})
app.get('/status', (req, res) => {
  res.send("Status unavailable, haven't written functionality yet")
})

// Unmatched routes 404
app.use((req, res) => {
  res.status(404)
  res.end(`
  <h1>${req.path}</h1>
  404 Not found
  `)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})