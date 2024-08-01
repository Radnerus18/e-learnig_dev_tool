const errFunc = (errorBit,msg,data)=>{
    if(errorBit){
        return {is_Error: errorBit, message:msg}
    }else{
        return {is_Error:errorBit,message:msg,data}
    }
}
module.exports = errFunc;