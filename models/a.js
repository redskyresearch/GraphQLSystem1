const mongoose = require('mongoose');

const aSchema = new mongoose.Schema({
    // name: String,
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('A', aSchema);
