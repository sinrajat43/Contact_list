const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user-rajat:user123@cluster0.ijpp8.mongodb.net/contacts_list_db');

const db= mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));

db.once('open', function(){
    console.log('Successfully connected to database');
});