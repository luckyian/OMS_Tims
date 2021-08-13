const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    _id: String,
    store: [{
        _id: String,
        chips: [{
            name: String,
            sku: Number
        }],
        name: String,
    }],
    chips: [{
        _id: String,
        name: String,
        type: Number

    }],
    order: [{
        _id: String,
        name: String,
        date: {
            type: Date,
            default: Date.now
        },
        cases: [{
            store: [{
                chips: [{
                    name: String,
                    sku: Number,
                    case: Number
                }],
                name: String,
            }]
        }]
    }]
})

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;