

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
      const refugios= await database.collection('refugios_content').find({}).toArray();  
      return res.send(refugios).status(200); 
    
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

      const persons= await database.collection('person').find({}).toArray();

  
      res.render('refugio', {img1 : refugios.img, img2 : refugios.img2, img3 : refugios.img3, idRefugio: "/refugio/"+refugios.id, personArray: persons})
      
    }catch(err){
      console.log("Error"+err);  
      return res.status(404)
    }

  
  });

  //POST METHOD

module.exports = router