const express = require('express');
const routes= express.Router();

// Setpath usercontroller 
const usercontroller= require('../controllers/usercontroller');


routes.post('/createuser',usercontroller.createuser);
routes.post('/loginuser',usercontroller.loginuser);
routes.post('/addhabit/:id',usercontroller.addhabit);
routes.get('/delete/:id',usercontroller.delete);

module.exports=routes;