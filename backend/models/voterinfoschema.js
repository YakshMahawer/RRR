const mongoose = require("mongoose");

const voterinfoSchema = new mongoose.Schema({
    voterId:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    area:{
        type: String,
        required: true
    }
});

const Voterinfo = new mongoose.model('Voterinfo',voterinfoSchema);
module.exports = Voterinfo;