import path from 'path'
import express, { Request, Response } from 'express'

const PORT = 8080
const app = express()

app.get("/", (req: Request, res: Response) => {
  res.send(`
    <h1>Hello world</h1>
    <h4>TypeScript</h4>
    <a href="/download">Download important documents</a>
    <a href="/page">Go to page</a>
  `)
})

app.get("/download", (req: Request, res: Response) => {
  res.download("kitten.jpg")
})

app.get("/page", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "number.html"))
})

app.listen(PORT, () => {
  console.log(`Currently listening on port ${PORT}`)
})