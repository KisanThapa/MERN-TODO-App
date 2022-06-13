const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
	title: {
		type: 'String',
		required: true,
	},
	description: {
		type: 'String',
	},
});

const Todo = mongoose.model('todo', ToDoSchema);

module.exports = Todo;
