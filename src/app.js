//Import Express
const express = require("express");

//Use dotenv
require("dotenv").config();

//Import router
const todoRouter = require("./todos/todos.router").router;

//create express instance and store in a variable
const app = express();

//Enable incoming JSON data
app.use(express.json());

//Routes of the todos
app.use("/api/v1", todoRouter);

//Spin up server

app.listen(8000, () => {
  console.log("Server started at port number 8000");
});
