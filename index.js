const express=require('express')
const app=express()

const cors=require('cors')
const connectToDb = require('./config/db')
const router = require('./routes/Route')

const port=8080

app.use(cors())

app.use(express.json())

app.use('/api',router)
app.use('/',(req,res)=>{
    res.send('welcome tp home page ')
})

connectToDb()
app.listen(port,()=>{
    console.log(`server is running on port : ${port}`);
})