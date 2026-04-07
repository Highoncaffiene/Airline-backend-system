const express = require('express');
const {PORT} = require('./config/serverConfig');
const  { City } = require('./models/index'); // mebntion  the path correctly 
const CityRepository = require('./repository/city-repository')
const bodyParser = require('body-parser')

const setupAndStartServer  =  async ()=>{
    // create the express object 
    const app = express();
    // const PORT = 3000;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,  ()=>{
        console.log(`Server started at ${PORT}`)
        // console.log(db.City);
        // await City.create({ creates the entry called New delhi in the data base but this is not thhe fighjt palce to interact with the databse and we will do so inthe repository folder
        //     name : "New Delhi"
        // })
        // console.log(process.env);
        // const repo =  new CityRepository();
        // repo.createCity({name: "Hyderabad"});
        repo.deleteCity(2)

        
    })

}   

setupAndStartServer();