const express = require("express");
const app = express();
const connectDB = require('./db/conn')
require('dotenv').config()
const bcrypt = require('bcryptjs')
const AdminData = require('./models/adminDataSchema')
const OtpData = require('./models/otpSchema')

const routing = require('./routes/tasks')

// Schemas
const Complaint = require("./models/complaintschema");
const Voterinfo = require("./models/voterinfoschema");
const Area = require("./models/areaschema");

// Middlewares
app.use(express.json())


// Routing
app.use('/', routing)



// Starting server
const port = 7070
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI).then(()=>{
            console.log('Database connection establilshed');
            app.listen(port, ()=>{
                console.log(`Server is listening on port ${port}...`);
            })
        })
    } catch (error) {
        console.log('Database not connecting');
    }
}
start()