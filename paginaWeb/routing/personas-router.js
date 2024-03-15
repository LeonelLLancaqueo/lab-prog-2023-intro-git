
const express= require('express');
const Person = require('../public/models/Person');


const router= express.Router();

router.use('/', express.static('public'));

router.use('refugio', express.static('public/pagina-refugio'));

router.use('resources-refugio', express.static('public/resources-refugio'));

router.use('css', express.static('public/css'));

router.use(express.json());

//db
const database = require('../public/iniciarDB');
const { isUtf8 } = require('buffer');
const { parse } = require('path');



//archivo con persona

router.post('/', async(req,res)=>{

    try{  
        
        //creamos el modelo con la info del formulario
        
        const persona =Person(req.body)
            

        //guardamos en bd
        const insertOne= await database.collection('person').insertOne(persona);
        console.log('documents successfully inserted.\n');

        res.status(200);
        res.send(persona);

      }catch(err){
        console.log("error insertar una persona en la db: "+ err);
        return res.status(404)
      }
      
          
  
})
router.get('/', async(req,res)=>{

  

  try{

    const persons= await database.collection('person').find({}).toArray();
    
    const page= parseInt(req.query.page);
    const pageSize= parseInt(req.query.pageSize);


    //calculamos el inicio y fin de los indices para la paquina requerida
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    //Slice the products array based on the indexes
      const paginatedPersons = persons.slice(startIndex, endIndex);
      
    //Calculate the total number of pages
      const totalPages = Math.ceil(persons.length / pageSize); 

      

    res.json({persons: paginatedPersons, totalPages});
    


    //return res.send(persons).status(200);

  }catch(err){
    console.log("Error"+err);  
    return res.status(404)
  }
    
        

})

module.exports= router;