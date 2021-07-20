const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PicklistSchema = new Schema({

    picklist: [
        {
            title: {
                type: String,
            },
            
            day: {
                type: Date,
                default: Date.now
            },
            order: {
                type: Number,
            },

            
        }]
});

const PicklistSchema = mongoose.model("Picklist", PicklistSchema);

module.exports = PicklistSchema;