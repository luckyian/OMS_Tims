const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddChipSchema = new Schema({

    addChip: [
        {
            date: {
                type: Date,
                default: Date.now
            },

            name:{
                type: String,
                required: "Chip name required"

            },
            sku: {
                type: Number,
                required: "Chip sku is required"
            },

        }]
});

const AddChipSchema = mongoose.model("Add Chip", AddChipSchema);

module.exports = AddChipSchema;