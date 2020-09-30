const express = require('express');
const colors = require('colors');

const server = express();

server.get('./',function(req,res){

        res.send('<h1>Hola Mundo<h1>');
        res.end();
});

server.listen(3000,function(){
    console.log('Server port 3000'.red);
    
});

console.log("Este sera un cambio grande");
