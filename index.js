require("datejs")

function combineUsers(a1=[], a2=[], a3=[]){

  const combinedObject = {
    users: [...a1, ...a2, ...a3],
    merge_date: Date.today().toString("M/d/yyyy")
  }
return combinedObject
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};