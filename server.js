const express = require('express');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');
const app = express();

// Connect to DB

connectDB();

// Init Middleware
app.use(fileUpload());

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello from your express API'));

// Define Routes
app.use('/api/editions', require('./routes/api/editions'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/upload', require('./routes/api/upload'));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
