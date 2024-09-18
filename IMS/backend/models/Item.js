const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema(
    {   
        SerialNumber: {
            type: String,
            required: true,
            unique : true
        },  
        ItemName: {
            type: String,
            required: true,
        },
        Quantity: {
            type: Number,
            required: true,
        },
        ClassNumber:{
            type : String,
            unique : true
        }
    });

const Items = mongoose.model("Items", ItemSchema)
module.exports = Items;