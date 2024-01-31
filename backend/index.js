const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

let todos = [{ id: 123, title: "Here we go", isDone: false }]

app.get('/todo', (req, res) => {
  res.send(todos)
})

app.get('/todo/completed', (req, res) => {
  res.send(todos.filter(t=>t.isDone))
})

app.post('/todo', (req, res) => {
  const todo = {...req.body, id: Math.random()}
  todos.unshift(todo)
  res.status(201).send(todo)
})

app.put('/todo/:id', (req, res) => {
  const index = todos.findIndex(t=>t.id === req.params.id)
  console.log(index)
  todos[index] = req.body
  res.status(201).send(req.body)
})

app.delete('/todo/:id', (req, res) => {
  console.log(req.params.id)
  todos = todos.filter(todo => todo.id != req.params.id)
  res.status(201).send(req.body)
})

app.listen(4000, () => {
  console.log("Ready to get todos!")
})
