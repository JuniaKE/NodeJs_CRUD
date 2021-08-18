const mongoose = require('mongoose');

// Create a schema inside here
const PostSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },

});

// Export the Posts Schema

module.exports = mongoose.model('Post', PostSchema);