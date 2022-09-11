import fs from 'fs'
import express from 'express'
import cors from 'cors'

let files = fs.readdirSync('todos')
let app = express()

app.use(cors())
app.use(express.json())

app.get('/todos', async (req, res) => {
  let r: any = []

  files.forEach((f) => {
    r.push({
      id: f,
      content: fs.readFileSync('todos/' + f).toString(),
    })
  })

  res.send(r)
})

// app.put('/todos/update', async (req, res) => {
//   fs.writeFileSync('todos/' + req.params.id, req.body.content)
//   res.send({ success: true })
// })

app.post('/todos/new', async (req, res) => {
  fs.writeFileSync('todos/' + files.length, req.body.content)
  files = fs.readdirSync('todos')
  res.send({ success: true })
})

app.delete('/todos/delete/:id', async (req, res) => {
  fs.rmSync('todos/' + req.params.id)
  files = fs.readdirSync('todos')
  res.send({ success: true })
})

app.listen(3333, () => console.info('Listening on 3333'))