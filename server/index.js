const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'Database connection error:'));
db.once('open', () => {
    console.log('Connected to the database');
});

app.use("/", userRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


