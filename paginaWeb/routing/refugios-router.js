

const express= require('express')

const router= express.Router(); 

const fs= require('fs')



router.use('/', express.static('public'));

router.use('refugio', express.static('public/pagina-refugio'));

router.use('resources-refugio', express.static('public/resources-refugio'));

router.use('css', express.static('public/css'));

router.use(express.json());


//db
const database = require('../public/iniciarDB');
const { isUtf8 } = require('buffer');

// GET METHOD 



router.get( "/refugios", async (req,res) =>{
 
    try{
      
      
      const page= parseInt(req.query.page);
      const pageSize= parseInt(req.query.pageSize);
     
      //calculamos el inicio para la paquina requerida
      const startIndex = (page - 1) * pageSize;
      
      
      const refugios= await database.collection('refugios_content').find({}).skip(startIndex).limit(pageSize).toArray();  

      const totalrefugios= await database.collection('refugios_content').countDocuments();  

        
      //Calculate the total number of pages
        const totalPages = Math.ceil(totalrefugios / pageSize); 
      

      res.json({refugios: refugios, totalPages});
    
    }catch(errr){
      console.log("Error");  
      return res.status(404)
    }
  } 
  );
  
  router.get( '/',(req,res) =>{
      
      
      res.render('index');
    
  });

  router.get( '/refugio/:id', async (req,res) =>{
      
    try{
      const refugios= await database.collection('refugios_img').findOne({id: req.params.id});

      const persons= await database.collection('person').find({}).toArray(); //preguntar si esta bien esto

  
      res.render('refugio', {img1 : refugios.img, img2 : refugios.img2, img3 : refugios.img3, idRefugio: "/refugio/"+refugios.id, 
      personArray: persons})
      
    }catch(err){
      console.log("Error"+err);  
      return res.status(404)
    }

  
  });

  router.get( '/refugio-content/:id', async (req,res) =>{
      
    try{
      const refugio= await database.collection('refugios_content').findOne({id: req.params.id}); 
      return res.send(refugio).status(200); 
    
    }catch(errr){
      console.log("Error");  
      return res.status(404)
    }

  
  });

  //POST METHOD

module.exports = router