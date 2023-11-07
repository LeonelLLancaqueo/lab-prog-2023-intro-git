

const exp = require('constants');
const express= require('express');



const {MongoClient, ServerApiVersion}= require('mongodb');







const fs= require('fs');



const port= '3000';

const app = express();

app.use(express.json());




app.get( "/refugios", async (req,res) =>{
 
    const refugios= await client.db("myDB").collection('refugios_content').find({}).toArray();
    console.log(refugios);

    return res.send(refugios).status(200);  
    
} 
);
app.set('view engine','ejs');

app.use('/', express.static('public'));
app.use('/', express.static('public/pagina-refugio'));

app.use(express.urlencoded({extended: true}))


/* En proceso */


app.get( '/',(req,res) =>{
    
    
    res.render('index');
    
});

app.post( '/pagina-refugio/refugio.html?:id',async (req,res) =>{
    
    console.log(req.params.id);
    console.log("el formulario redireciona bien");

    console.log(req.body);
      
  

    try{  
      const insertOne= await client.db('myDB').collection('person').insertOne(req.body);
      console.log(`${insertOne.insertedCount} documents successfully inserted.\n`);

    }catch(err){
      console.log("error insertar una persona en la db");
    }

    return res.status(200);    
  


});
app.listen(port, function () {
    console.log("hola mundo");

    /*
    let doc= fs.readFileSync('./public/datos.json','utf8');
    console.log(doc);
    */
});





  const uri = "mongodb+srv://leo87llanca:27870717leo@cluster0.m5xre3g.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("myDB").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   //await client.close();

  }
}
run().catch(console.dir);



//variables de la db
const dbName= 'myDB'
const database = client.db(dbName);
const person_colecction= database.collection('person')
