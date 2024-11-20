const express = require('express');
var cors=require('cors')
var app= express()

app.use(cors())
app.use(express.json());
const userrouter = require("./Router/userrouter");
app.use("/api/v1/",userrouter);
module.exports=app;
