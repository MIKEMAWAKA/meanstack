
const port = process.env.port || 3000;
const cors = require('cors');

const express = require('express');
// const connect = require('./connection');
const connect = require('./connection')


const routes = require('./routes')

connect();
const app = express();
app.use(express.json());

app.use('/api',routes)
app.use(cors);



app.listen(port,()=>{

    console.log(`Our application is running at port ${port}`);

});

