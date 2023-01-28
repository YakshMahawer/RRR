const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    voterId:{
        type: String,
        required: true
    },
    area_name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    admin_no:{
        type: Number,
        required: false
    },
    status:{
        type: String,
        default: "pending",
        required: true
    },
    otherCategory:{
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