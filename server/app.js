const express = require("express");
require('dotenv').config()



const ManagerRouter=require("./routes/managerRouter")
const OwnerRouter=require("./routes/ownerRouter")
const VisitorRouter=require("./routes/visitorRouter")
const cors = require('cors');

const app = express(); 
app.use(cors());

// app.use(express.urlencoded())
app.use(express.json());


 app.use("/api/manager",ManagerRouter)
 app.use("/api/owner",OwnerRouter)
 app.use("/api/visitor",VisitorRouter)

app.listen("3001", () => {
     console.log("app running");
 });