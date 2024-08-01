require('dotenv').config();
const {secret_Token} = process.env
const jwt = require('jsonwebtoken');

const secretToken = (id)=>{
    const token = jwt.sign({id},secret_Token,{
        expiresIn:'1h'
    })
    return token
}
module.exports = secretToken