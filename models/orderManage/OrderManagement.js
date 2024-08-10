const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderListSchema = new Schema({
    orderNo: {
        type: String,
    
    },
    image: {
        type: String,
    
    },
    party: {
        type: String,
        required: true,
    },
    merchandiser: {
        type: String,
    
    },
    gsm: {
        type: Boolean,
    
    },
    shipMode: {
        type: String,
        
    },
    payMode: {
        type: String,
        
    },
    year: {
        type: String,
      
    },
    season: {
        type: String,
   
    },
    totalQty: {
        type: String,
     
    },
    totalUnitPrice: {
        type: String,
       
    },
    totalValue: {
        type: String,
    
    },
    status: {
        type: String,
    
    }
  
}, { timestamps: true });

module.exports = mongoose.model('Order', orderListSchema);