const { Response } = require("../common/index");
const debug = require("debug")("api:controller");
const createError = require("http-errors");
const Todo = require("../models/todo.model");

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

const getTodos = async (req, res) => {
	const todos = await Todo.find();
	return res.status(200).json(todos);
};

const getTodo = async (req, res) => {
	const { id } = req.params;
	const todo = await Todo.findById(id);
	debug(todo);
	return res.status(200).json(todo);
};

const createTodo = async (req, res) => {
	const todo = new Todo();
	todo.title = req.body.title;
	todo.description = req.body.description;
	todo.date = req.body.date;
	await todo.save();
	return res.status(201).json({ msg: "todo created" });
};

const deleteTodo = async (req, res) => {
	const { id } = req.params;
	try {
		await Todo.deleteOne({ _id: id });
		return res.status(200).send("todo deleted");
	} catch (error) {
		return res.status(500).send("Error deleting todo");
	}
};

const updateTodo = async (req, res) => {
	const { id } = req.params;
	try {
		const { title, description, date } = req.body;
		await Todo.findByIdAndUpdate(id, { title, description, date });
		return res.status(200).send("Todo updated");
	} catch (error) {
		return res.status(500).send("Error updating todo");
	}
};

module.exports = {
	principal,
	notFound,
	getTodos,
	getTodo,
	createTodo,
	deleteTodo,
	updateTodo,
};
