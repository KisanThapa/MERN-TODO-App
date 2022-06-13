require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const connectDB = require('./config/db');

// routes
const todo = require('./routers/todo');

// Connect to database
connectDB();

// initialize the middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));
app.get('/', (req, res) => res.send('Server up and running'));

// use routes
app.use('/api/todo', todo);

// setting up ports
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
