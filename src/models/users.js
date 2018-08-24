var db = require('../database/db');

var Users = {

    getAllUsers:function(callback) {
        return db.query("Select * from users_master",callback);
    },
    getUserById:function(id,callback) {
        return db.query("select * from users_master where Id=?",[id],callback);
    },
    addUser:function(User,callback) {
        return db.query("Insert into users_master values(?,?,?,?)",[null, User.name, User.email, User.phone],callback);
    },
    deleteUser:function(id,callback) {
        return db.query("delete from users_master where id=?",[id],callback);
    },
    updateUser:function(id,User,callback) {
        return db.query("update users_master set name=?,email=?,phone=? where id=?",[User.name,User.email,User.phone,id],callback);
    }

};

module.exports = Users;