const express=require('express');
const cors=require('cors');
const bollyrouter=require('./Routes/bollywood')
const hollyrouter=require('./Routes/hollywood')
const foodrouter=require('./Routes/food')
const techrouter=require('./Routes/technology')
const fitnessrouter=require('./Routes/fitness')
const app=express();
const port=4000 || process.env.PORT;

app.use(cors());
app.use(bollyrouter)
app.use(hollyrouter)
app.use(foodrouter)
app.use(techrouter)
app.use(fitnessrouter)

app.listen(port,()=>{
    console.log(`server is started at port ${port}`);
})
