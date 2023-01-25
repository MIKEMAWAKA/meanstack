
require ('dotenv').config();
// const {builtinModules} = require('module');
const mongoose = require('mongoose');


const db_url = "mongodb://127.0.0.1:27017/mearn"


const connect = function(){
    mongoose.set("strictQuery", true);
    mongoose.connect(db_url,{
        // useNewUrlParser: true,
      

    }).then((val)=>{
        console.log('Databse has connected');
        console.log(val);
    }).catch((err)=>{
        console.log(err);
        console.log('Error on connection database');
    })

}

module.exports = connect;