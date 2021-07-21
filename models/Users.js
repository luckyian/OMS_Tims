const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// tests = orders
// meds = chips
// store = glucose
// meds(chips).type = sku
// meds(chips).doses = cases
const UsersSchema = new Schema({
    _id: String,
    orders: [{
        date: {
            type: Date,
            default: Date.now
        },
        store: Number,
        chips: [{
            name: String,
            sku: {
                type: Number,
            },
            cases: [{
                 type: Number
            }]
        }]
        
    }],
    chips: [{
        name: String,
        sku: {
            type: Number,
        }
    }]
})

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;