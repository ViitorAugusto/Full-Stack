const routes = require("express").Router();
const TaskController = require("../controllers/TaskController");

routes.get("/", TaskController.getAll);
routes.post("/create", TaskController.createTask);


module.exports = routes;