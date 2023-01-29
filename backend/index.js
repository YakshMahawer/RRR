const express = require("express");
const app = express();
const connectDB = require('./db/conn')
require('dotenv').config()
const cors = require('cors')
const popstats = require('./routes/popstats')

const routing = require('./routes/tasks')
const complaintRoutes = require('./routes/complaints')
const areaRoutes = require('./routes/areas')

// Schemas
const Complaint = require("./models/complaintschema");
const Voterinfo = require("./models/voterinfoschema");
const Area = require("./models/areaschema");
const AdminData = require("./models/adminDataSchema");
// Middlewares
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
}))


// Routing
app.use('/', routing)
app.use('/', complaintRoutes)
app.use('/', areaRoutes)
app.use('/areaStats',popstats)

app.get("/:email",async (req,res) =>{
    const admin = await AdminData.findOne({mail: req.params.email});
    res.send(admin);
    req.end();
});
app.get("/complaints/:admin",async (req,res) =>{
    const comp = await Complaint.find({admin_no: req.params.admin});
    res.send(comp);
    res.end();
});
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


