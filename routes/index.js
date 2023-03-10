const express = require('express');
const routes= express.Router();

//Setpath homecontroller 
const homecontroller= require('../controllers/homecontroller');

routes.use('/user',require('./user'));
routes.use('/update',require('./update'));

routes.get('/',homecontroller.login);
routes.get('/home/:token',homecontroller.home);
routes.get('/home',homecontroller.home);
routes.get('/singup',homecontroller.singup);

module.exports=routes;