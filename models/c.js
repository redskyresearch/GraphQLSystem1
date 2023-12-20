const mongoose = require('mongoose');

const cSchema = new mongoose.Schema({
    // subject: String,
    // message: String,
    // date: Date,
    // b_id: String
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    bRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'B'
    }
});

module.exports = mongoose.model('C', cSchema);
