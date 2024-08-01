const express = require('express');
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const cookieParser = require('cookie-parser')
require('dotenv').config()
const port =  process.env.PORT;
require('./config/db');
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/',userRoutes)
app.listen(port,()=>{
    console.log('Server running in the port:',port)
})