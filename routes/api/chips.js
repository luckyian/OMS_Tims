const router = require("express").Router();
const chipsController = require('../../controller/chipsController')
// order = dose
// orderCase = takeMedication
router.route("/")
    .delete(chipsController.removeChip)
    .post(chipsController.addNewChip)
router.route("/chip")
    .post(chipsController.orderCase)

module.exports = router;