const { Router } = require("express");
const debug = require("debug")("api:todos-routes");
const {
	principal,
	notFound,
	getTodos,
	getTodo,
	updateTodo,
	createTodo,
	deleteTodo,
} = require("../controllers/todos.controller");

const router = Router();

router.get("/", principal);
router.get("/todos", getTodos);
router.get("/todos/:id", getTodo);
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);
router.all("*", notFound);

module.exports = router;
