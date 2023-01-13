const { Response } = require("../common/index");
const createError = require("http-errors");
const Todo = require("../models/todo.model").default;

// '/'
const principal = (req, res) => {
	const menu = {
		todos: `http://${req.headers.host}/todos`,
	};
	Response.success(res, 200, "API ToDo's", menu);
};

const notFound = (req, res) => {
	Response.error(res, new createError.NotFound());
};

const getTodos = (req, res) => {};

const getTodo = (req, res) => {};

const createTodo = (req, res) => {};

const deleteTodo = (req, res) => {};

const updateTodo = (req, res) => {};

module.exports = {
	principal,
	notFound,
	getTodos,
	getTodo,
	createTodo,
	deleteTodo,
	updateTodo,
};
