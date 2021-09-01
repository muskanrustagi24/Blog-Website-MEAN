const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://dbUser:abc1234@cluster0.aj8fx.mongodb.net/blogs-database?retryWrites=true&w=majority';
mongoose.connect(dbURI, function(err, response){
        if(err){
            console.log(err); 
        }
        else{
            console.log('Connected to database');
        }
});

module.exports = mongoose