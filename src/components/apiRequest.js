const apiResquest = async(url ='', optionObj = null, errMsg = null) =>{
    try{
    const response = await fetch(url,optionObj);
    if(!response.ok) throw Error('Please Reload the App');
    } catch(err){
        errMsg = err.messsage;
    } finally{
        return errMsg
    }
}

export default apiResquest;