const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CreateOrderSchema = new Schema({

    order: [
        {
           

            chip:{
                type: String,

            },
            sku: {
                type: Number,
                
            },

            amount: {
                type: Number,
            }
        }]
});

const CreateOrderSchema = mongoose.model("Create Order", CreateOrderSchema);

module.exports = CreateOrderSchema;