const express = require('express');
var cors=require('cors')
var app= express()

app.use(cors())
app.use(express.json());

const  userRouter = express.Router();
const {testConnection, createUser, getUser} = require("../Controller/usercontroller");
userRouter.get("/test-connection", testConnection);
userRouter.post("/create-user", createUser);
userRouter.get("/get-user",getUser);
module.exports = userRouter;