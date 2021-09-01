const mongoose = require('../db');

const Blog = mongoose.model('Blog', {
    title: {type: String},
    category: {type: String},
    content: {type: String}
});

module.exports = Blog;