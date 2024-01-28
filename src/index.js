const express = require('express');
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig')
const CityRepository = require('./repository/city-repository')

const setupAndStartServer = async () => {

    // create the express object
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT  , ()=>{
        console.log(`The server is running on port ${PORT}`);
        // We are making instance of that class present in city-repository
        const repo = new CityRepository();
        repo.createCity({name:"New Delhi"});
    });
}

setupAndStartServer();