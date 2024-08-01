const mongoose = require('mongoose');
require('dotenv').config();
const {MONGO_URI} = process.env

mongoose.connect(MONGO_URI,{
    writeConcern: { w: 'majority' }
  });
const db = mongoose.connection;
db.on('connected',()=>{
    console.log('Database connected successfully')
})
db.on('error',(err)=>{
    console.log('Database connection denied',err)
})

module.exports = db