const express = require('express');
const app = express();
const port = 8000;
const ExpreseLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
app.use(express.urlencoded());
app.use(ExpreseLayout);
app.use(express.static('./assests'));
app.use('/image',express.static(__dirname + '/image'));

//Setup view engine ejs and dirpath
app.set('view engine','ejs');
app.set('views','./views')

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// parse application/json requests
app.use(bodyParser.json());

//Set Routes index.js
app.use('/',require('./routes/index'));

//Setup server for port number 8000
app.listen(port,(err)=>{
    if(err){console.log("Error in Server Run ",err);return}
    console.log("Server run Sucessfull for Port ",port)
})
