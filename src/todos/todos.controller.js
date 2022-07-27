// Create a "Database" of the todo's

const todosDB = [
  {
    id: 1,
    tittle: "Test",
    description: "Do the different tests of the app",
    isCompleted: false,
  },
];

//Definition of the controllers to the http verbs GET, POST, DELETE and PUT

//GET all tasks
const getAllTodos = () => {
  return todosDB;
};

//Get an specific task
const getTodosById = (id) => {
  const filteredDB = todosDB.filter((task) => task.id === id);
  return filteredDB[0];
};

//POST
const createTodos = (taskObj) => {
  if (todosDB.length === 0) {
    const newTodo = {
      id: 1,
      tittle: taskObj.tittle,
      description: taskObj.description,
      isCompleted: false,
    };
    todosDB.push(newTodo);
    return newTodo;
  }
  const newTodo = {
    id: todosDB[todosDB.length - 1].id + 1,
    tittle: taskObj.tittle,
    description: taskObj.description,
    isCompleted: false,
  };
  todosDB.push(newTodo);
  return newTodo;
};

//Delete
const deleteTodo = (id) => {
  const index = todosDB.findIndex((task) => task.id === id);
  if (index !== -1) {
    todosDB.splice(index, 1);
  }
  return todosDB;
};

//Update
const updateTodo = (id, taskObj) => {
  const index = todosDB.findIndex((task) => task.id === id);
  if (taskObj.tittle && taskObj.description && taskObj.isCompleted) {
    todosDB[index] = {
      id,
      tittle: taskObj.tittle,
      description: taskObj.description,
      isCompleted: taskObj.isCompleted,
    };
  }
  return todosDB;
};

/* We must import all the functions with "exports": export an object with all the functions ó module.exports*/

module.exports = {
  getAllTodos,
  getTodosById,
  updateTodo,
  deleteTodo,
  createTodos,
};
