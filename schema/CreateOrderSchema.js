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

const CreateOrderSchema = mongoose.model("Take Medication", CreateOrderSchema);

module.exports = CreateOrderSchema;