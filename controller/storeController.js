const db = require("../models/Users");
// tests = orders
// test = order
module.exports = {

  create: function(req, res) {
    db.findByIdAndUpdate(
      req.body.id,
      { $push: { orders: req.body.order } },
      {new: true}
    ).then(info => {
      console.log(info)
      res.json(info)
    }).catch(err => {
      console.log(err)
      res.status(503).end()
    })
  }
}