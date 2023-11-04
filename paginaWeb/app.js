

const express= require('express');

const fs= require('fs');

//const router= express.Router();

//const hostname= "127.0.0.1";

const port= '3000';

const app = express();


app.get( "/usuarios",(req,res) =>{
 
    fs.readFile('datos.json', function(err, data) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        return res.send();
    });    
} 
);
app.set('view engine','ejs');

app.use(express.static('public'));

/* En proceso */
app.get( '/refugio/:id',(req,res) =>{
    
    const idRefugio= req.params.id;
    res.render('refugio?');
});

app.get( '/',(req,res) =>{
    res.render('index');
});


app.listen(port, function () {
    console.log("hola mundo");
});