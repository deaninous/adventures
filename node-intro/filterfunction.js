module.exports = function(folder, ext, callback){


var fs = require('fs')  
   fs.readdir(folder, function(err, list){
    if(err){
      return callback(err)
      }
    if(list){
      var ret = list.filter(function(file){
          reg = file.match(`.${ext}`)
          return reg
        
      })
      callback(null, ret)
    }
   })




}