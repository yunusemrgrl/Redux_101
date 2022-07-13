const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');
const bodyParser = require('body-parser');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let todos = [
  {
    id: 1,
    title: 'todo 1',
    completed: true,
  },
  {
    id: 2,
    title: 'todo 2',
    completed: false,
  },
  {
    id: 3,
    title: 'todo 3',
    completed: false,
  },
  {
    id: 4,
    title: 'todo 4',
    completed: false,
  },
  {
    id: 5,
    title: 'todo 5',
    completed: false,
  },
];

app.get('/todos', (req, res) => res.send(todos));

app.get('/todos/:id', (req, res) => {
  console.log(req.params.id);
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: 'İşlenemeyen veri',
    });
  } else {
    const todo = todos.find((item) => item.id == req.params.id);
    console.log(todo);
    if (todo) {
      res.send(todo);
    } else {
      res.send(400, {
        message: 'kullanıcı bulunamadı',
      });
    }
  }
});

app.post('/todos', (req, res) => {
  const todo = { title: req.body.title, id: nanoid(), completed: false };
  todos.unshift(todo);
  return res.send(todo);
});

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  const completed = Boolean(req.body.completed);
  if (index > -1) {
    todos[index].completed = completed;
  }
  return res.send(todos[index]);
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index > -1) {
    todos.splice(index, 1);
  }
  res.send(todos);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
