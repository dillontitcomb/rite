const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello from your express API'));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
