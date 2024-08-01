const bcryptJs = require('bcryptjs');

const securePassword = async(password)=>{
    const salt = await bcryptJs.genSalt(10);
    const hashedPassword = await bcryptJs.hash(password,salt);
    return hashedPassword
}
module.exports = securePassword;