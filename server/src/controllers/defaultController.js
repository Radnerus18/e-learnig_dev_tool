const errFunc = require('../utilities/errorFunction')
const defaultController = async(req,res,next)=>{
    res.status(200).json(errFunc(false,"Home Page","Welcome"))
}
module.exports = defaultController;