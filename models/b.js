const mongoose = require('mongoose');

const bSchema = new mongoose.Schema({
    // topic: String,
    // a_id: String
    topic: {
        type: String,
        required: true
    },
    aRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'A'
    }
});

module.exports = mongoose.model('B', bSchema);
