const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to DB

connectDB();

app.get('/', (req, res) => res.send('Hello from your express API'));

// Define Routes
app.use('/api/editions', require('./routes/api/editions'));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
