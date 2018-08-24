var Users = require('../models/users');

const router = app => {

    app.get('/', (request, response) => {
        response.send({
            message: 'Welcome to Mytube.'
        });
    });

    app.get('/users', (request, response) => {

        Users.getAllUsers(function(err,rows){
 
            if(err) {
                response.send(err);
            } else {
                response.send(rows);
            }
             
        });

    });

    app.get('/users/:id?', (request, response, next) => {
        
        Users.getUserById(request.params.id, function(err,rows){
 
            if(err) {
                response.send(err);
            } else {
                response.send(rows);
            }
             
        });

    });

    app.post('/users', (request, response, next) => {

        Users.addUser(request.body, function(err,rows){
 
            if(err) {
                response.send(err);
            } else {
                response.send(rows);
            }
             
        });

    });

    app.delete('/users/:id?', (request, response, next) => {
        
        Users.deleteUser(request.params.id, function(err,rows){
 
            if(err) {
                response.send(err);
            } else {
                response.send(rows);
            }
             
        });

    });

    app.put('/users/:id?', (request, response, next) => {

        Users.updateUser(request.params.id, request.body, function(err,rows){
 
            if(err) {
                response.send(err);
            } else {
                response.send(rows);
            }
             
        });

    });

    
}



module.exports = router;