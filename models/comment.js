const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../config/db');

const Comment = new Schema({
    user_name: { type: String, default: 'test_name', index: true },
    content: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now }
  });

module.exports = db.model('Comments', Comment)