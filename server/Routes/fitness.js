const express=require('express');
const fitness_data=require('../Data/fitness_data')
const fitnessroute=express.Router();
fitnessroute.route('/fitness').get(fitness_data.fitness_data);
module.exports=fitnessroute;