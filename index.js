const express = require('express');
var app = express();
var port = 3000;


app.get('/', function(request, response){
        response.send('Hello coderx.tokyo');
});

app.listen(port, function(){
    console.log('hello express');
});

