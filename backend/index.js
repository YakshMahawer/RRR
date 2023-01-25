const express = require("express");
const mongoose = require("mongoose");
const Complaint = require("./models/complaintschema");
const Voterinfo = require("./models/voterinfoschema");
const Area = require("./models/areaschema");
const app = express();
require("./conn.js");
app.listen(7070, ()=>{
    console.log("Serverr Done");
});