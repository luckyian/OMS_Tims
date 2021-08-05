const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoresSchema = new Schema({
    _id: String,
    tests: [{
        date: {
            type: Date,
            default: Date.now
        },
        glucose: Number,
        comment: String
    }],
    chips: [{
        name: String,
        sku: {
            type: String,
        },
        orders: [{
            date: {
                type: Date,
                default: Date.now
            },
            amount: String
        }]
    }]
})

const Stores = mongoose.model("Stores", StoresSchema);

module.exports = Stores;