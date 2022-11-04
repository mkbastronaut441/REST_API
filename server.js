require('dotenv').config()


const express=require('express');
const mongoose=require('mongoose');


const app=express();


mongoose.connect(process.env.DATABASE_URL)
const db=mongoose.connection
db.on('error', (error)=>{console.error(error)})
db.once('open', ()=>{console.log('connected...')})

app.use(express.json())


const subscribersRouter= require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)


app.listen(2000, ()=>{
    console.log(`server is running at http://localhost:2000`)
})