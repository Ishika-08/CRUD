// config/db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/CRUD');

module.exports = mongoose.connection;
