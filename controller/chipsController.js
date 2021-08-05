const Users = require("../models/Users");
// meds/med = chip/chips
module.exports = {

    addNewChip: function(req, res) {
        console.log("adding new chip")
        console.log(req.body)
        Users.findByIdAndUpdate(
            req.body.id,
            { $push: { chips: req.body.chips } },
            {new: true}
        ).then(info => {
            res.json(info)
        }).catch(err => {
        console.log(err)
        res.status(503).end()
        })
    },
// order/orders = dose/doses
    orderCase: function(req, res) {
        Users.findOneAndUpdate(
            {"_id": req.body.id,
            "chips.name":req.body.chipName},
            { "$push": { "meds.$.orders": req.body.order } },
            {new: true}
        ).then(info => {
            console.log("worked")
            res.json(info)
        }).catch(err => {
        console.log(err)
        res.status(503).end()
        })
    },

    removeChip: function(req, res) {
        console.log("recived call")
        console.log(req.body.chip)
        console.log(req.body)
        Users.findOneAndUpdate(
            {"_id": req.body.id,
            "chips.name": req.body.chip},
            {"$pull": {"chips": { "name": req.body.chip } } },
            {new: true}
        ).then(info => {
            res.json(info)
        }).catch(err => {
        console.log(err)
        res.status(503).end()
        })
    }
}