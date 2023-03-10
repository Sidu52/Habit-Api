const express = require('express');
const routes= express.Router();

// Setpath usercontroller 
const updatecontroller= require('../controllers/updatecontroller');


routes.post('/updatehabbit',updatecontroller.updatehabbit);
routes.post('/selectday',updatecontroller.selectday);
routes.post('/delete',updatecontroller.delete);

module.exports=routes;