//Import the functions on the controllers
const {
  deleteTodo,
  getAllTodos,
  getTodosById,
  updateTodo,
  createTodos,
} = require("./todos.controller");

//Create the services

const getAll = (req, res) => {
  const data = getAllTodos();
  res.status(200).json({
    items: data.length,
    response: data,
  });
};

const getById = (req, res) => {
  const id = Number(req.params.id);

  if (id) {
    const data = getTodosById(id);
    if (data?.id) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: "Invalid ID" });
    }
  } else {
    res.status(400).json({ message: "Id is not a number" });
  }
};

const createTD = (req, res) => {
  const objTask = req.body;

  const data = createTodos(objTask);
  res.status(201).json(objTask);
};

const deleteTD = (req, res) => {
  const id = Number(req.params.id);
  if (id) {
    const data = deleteTodo(id);
    res.status(204).json(data);
  } else {
    res.status(400).json({ message: "Id is not a number" });
  }
};

const updateTD = (req, res) => {
  const id = Number(req.params.id);
  const objTask = req.body;
  if (id) {
    if (objTask.id) {
      const data = updateTodo(id, objTask);
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: "Invalid ID" });
    }
  } else {
    res.status(400).json({ message: "Id is not a number" });
  }
};

module.exports = {
  getAll,
  getById,
  createTD,
  deleteTD,
  updateTD,
};
