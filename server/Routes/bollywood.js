const express=require('express');
const bolly_data=require('../Data/bollywood_data')
const bollyroute=express.Router();
bollyroute.route('/bollywood').get(bolly_data.bolly_data);
module.exports=bollyroute;