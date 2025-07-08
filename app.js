const express = require('express');
const app= express();
const bcrypt= require('bcrypt');



//ENCRYPTING PASSWORDS
app.get('/', function(req, res){
    bcrypt.genSalt(10, function(err, salt) {
        // console.log('Salt:', salt); //to see the generated salt
        bcrypt.hash('Password123', salt, function(err, hash) {
            // Store hash in your password DB.
            console.log('Hash:', hash); //hashed password, which is Hash: $2b$10$GulGM49GXj69aRK30T19JulVoCcPPbC0p45FHfPaKHILN1/Q2N/ba
            res.send('Password hashed successfully!');
        });
    });
})


//VERIFYING PASSWORDS
app.get('/verify', function(req, res){
    bcrypt.compare('Password123', '$2b$10$GulGM49GXj69aRK30T19JulVoCcPPbC0p45FHfPaKHILN1/Q2N/ba', function(err, result) {
        // result == true
        console.log('Password match:', result); //true if password matches
        res.send('Password verification complete!');
    });
});


app.listen(3000);




















//SETTING AND READING COOKIES

// const cookieParser = require('cookie-parser');
// const express = require('express');
// const app= express();

// app.use(cookieParser());

// app.get('/', function(req, res){
//   // Set a cookie named 'myCookie' with the value 'cookieValue'
//   // The cookie will be sent to the client
//   res.cookie('myCookie', 'cookieValue'); //to set we use res.cookie
//   res.send('Cookie has been set!');
// });

// app.get('/read', function(req, res) {
//    console.log(req.cookies); // Access the cookie named 'myCookie', to read we use req.cookies
//     res.send('read page');
// });

// app.listen(3000);