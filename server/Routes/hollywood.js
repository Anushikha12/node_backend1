const express=require('express');
const holly_data=require('../Data/hollywood_data')
const hollyroute=express.Router();
hollyroute.route('/hollywood').get(holly_data.holly_data);
module.exports=hollyroute;