const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./conn.js");
app.listen(7070, ()=>{
    console.log("Server Done");
});