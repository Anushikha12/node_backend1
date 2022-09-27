const express=require('express');
const tech_data=require('../Data/technology_data')
const techroute=express.Router();
techroute.route('/technology').get(tech_data.tech_data);
module.exports=techroute;