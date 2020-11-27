const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BookSchema = new Schema({
    name: String,
    author: String,
    isbn: String,
    price: Number
});

module.exports = mongoose.model('Book', BookSchema);