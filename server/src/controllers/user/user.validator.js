const joi = require('joi');
const errFunc = require('../../utilities/errorFunction');

const validation = joi.object({
    username: joi.string().min(3).max(25).trim(true).required(),
    email: joi.string().email().trim(true).required(),
    password: joi.string().min(8).pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ).required()
})
const userValidation = async (req,res,next)=>{
    const { username, email, password } = req.body;
    const payload = {
        username: username,
        email: email,
        password: password,
    };
    const {error} = validation.validate(payload);
    if(error){
        res.status(406).json(errFunc(true,`Error in User validation: ${error.message}`))
    }else{
        next()
    }
}
module.exports = userValidation