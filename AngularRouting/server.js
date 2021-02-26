const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.static("dist/heroku-sample"))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})