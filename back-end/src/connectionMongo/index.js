const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/sharenergy';
mongoose.connect(dbURI);

const schema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
});

const model = mongoose.model('sharenergy', schema);

module.exports = model;
