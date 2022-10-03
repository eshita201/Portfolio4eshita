const express = require('express');
const  path = require( 'path');
const dotenv=require('dotenv');
const app = express();
dotenv.config({path:'config.env'})
const PORT=process.env.PORT
app.use( express.static(__dirname + '/dist/portfolio'));
app.listen(PORT,()=>{console.log(`running on http://localhost:${PORT}`)});
