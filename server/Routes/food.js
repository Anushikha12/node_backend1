const express=require('express');
const food_data=require('../Data/food_data')
const foodroute=express.Router();
foodroute.route('/food').get(food_data.food_data);
module.exports=foodroute;