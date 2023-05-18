const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema({
    name: {type: String, maxLength: 50},
    description: {type: String, maxLength: 250},
    slug: {type: String, unit: true},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Blog', Blog);