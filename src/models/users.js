var db = require('../database/db');

var Users={

getAllUsers:function(callback){
    return db.query("Select * from users_master",callback);
},
getUserById:function(id,callback){
    return db.query("select * from users_master where Id=?",[id],callback);
},
addUser:function(Task,callback){
    return db.query("Insert into users_master values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
},
deleteUser:function(id,callback){
    return db.query("delete from users_master where Id=?",[id],callback);
},
updateUser:function(id,Task,callback){
    return db.query("update users_master set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
}

};

module.exports=Users;