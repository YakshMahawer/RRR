const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
require('dotenv').config();
const atlasURI = process.env.MONGO_URI;
mongoose.connect(atlasURI, {
     useNewUrlParser: true,
     useUnifiedTopology: true
}).then(() => {
    console.log("Connection Established");
}).catch((e) => {
    console.log(e);
});