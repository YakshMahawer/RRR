const mongoose = require("mongoose");

const areaSchema = new mongoose.Schema({
    area_id:{
        type: String,
        required: true
    },
    area_name:{
        type: String,
        required: true
    },
    total_problems:{
        type: Number,
        required: true
    },
    problems:[{
        category: String,
        count: Number,
    }],
    required: false
});

const Area = new mongoose.model('Area',areaSchema);
module.exports = Area;