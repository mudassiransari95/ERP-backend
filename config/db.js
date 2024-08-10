const mongoose=require('mongoose')


const connectToDb=async()=>{
    await mongoose.connect('mongodb://0.0.0.0:27017/ER-Garments')
    .then(()=>console.log('mongodb connected successfully'))
    .catch(()=>console.log('error in connecting mongodb'))
}
module.exports=connectToDb