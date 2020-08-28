const express = require('express');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');
const app = express();
const path = require('path');

// Connect to DB

connectDB();

// Init Middleware
app.use(fileUpload());

app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/editions', require('./routes/api/editions'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/upload', require('./routes/api/upload'));
app.use('/api/newsPosts', require('./routes/api/newsPosts'));
app.use('/api/artists', require('./routes/api/artists'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder for build
  app.use(express.static('client/build'));
  // Serve built index.html file
  app.get('*', (req, res) => {
    // Go from current directory (dirname) to client folder, to build folder, then load index.html
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
