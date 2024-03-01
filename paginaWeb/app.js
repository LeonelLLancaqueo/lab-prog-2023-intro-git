

const express= require('express');

const app = express();

const port= '3000';

  //routing
const refugios_router= require('./routing/refugios-router')

const personas_router= require('./routing/personas-router')

const path= require('path')



//
const fs= require('fs');

app.use(express.json());

app.set('view engine','ejs');


app.use(express.urlencoded({extended: true}))

//routing

app.use('/', refugios_router);

app.use('/personas', personas_router);

app.listen(port, function () {
    console.log("server on port " + port);
});






