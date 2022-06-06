const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    },
    autherName: String,
    categaryName: {
        type: String,
        enum: ["health", "action", "fiction"] //"falana" will give an error
    },
    year: Number
    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users



// String, Number
// Boolean, Object/json, array