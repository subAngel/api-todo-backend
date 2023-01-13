const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	date: {
		type: Date,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = model("Todo", todoSchema);
