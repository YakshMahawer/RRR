const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    voterId:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    alloted_admin:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        default: "pending",
        required: true
    },
    complaintDetails:{
        type: String,
        required: false
    },
    complaintId:{
        type: String,
        required: true
    },
    addInfo:{
        type: String,
        required: false
    },
    created_at:{
        type: Date,
        default: Date.now,
        required: true
    }
});

const Complaint = new mongoose.model('Complaint',complaintSchema);
module.exports = Complaint;

