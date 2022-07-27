const router = require("express").Router();
const httpTodos = require("./todos.http");

//Definition of routes and associated verbs

router.route("/todos").get(httpTodos.getAll).post(httpTodos.createTD);

router
  .route("/todos/:id")
  .get(httpTodos.getById)
  .delete(httpTodos.deleteTD)
  .put(httpTodos.updateTD);

module.exports = {
  router,
};
