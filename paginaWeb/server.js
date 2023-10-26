

const http= require('http');

const express= require('express');

const fs= require('fs');

const router= express.Router();

const hostname= "127.0.0.1";

const port= '3000';


const server= http.createServer(listener);


router.get( "/usuarios",(req,res) =>{


    
    fs.readFile('datos.json', function(err, data) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        return res.end();
    });

    res.send("hello");
} 

);



server.listen(port, hostname, function () {
    console.log("hola mundo");
});