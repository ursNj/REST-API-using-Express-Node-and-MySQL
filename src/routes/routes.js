var Users = require('../models/users');

const router = app => {

    app.get('/', (request, response) => {
        response.send({
            message: 'Welcome to Mytube.'
        });
    });

    app.get('/users', (request, response) => {

        var res = Users.getAllUsers(function(err,rows){
 
            if(err) {
                response.send(err);
            } else {
                response.send(rows);
            }
             
        });

    });

    app.get('/users/:id?', (request, response, next) => {
        
        var res = Users.getUserById(request.params.id, function(err,rows){
 
            if(err) {
                response.send(err);
            } else {
                response.send(rows);
            }
             
        });

    });
    
}



module.exports = router;