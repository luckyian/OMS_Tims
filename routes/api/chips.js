const router = require("express").Router();
const chipsController = require('../../controller/chipsController')

router.route("/")
    .delete(chipsController.removeChip)
    .post(chipsController.addNewChip)
router.route("/dose")
    .post(chipsController.takeMedication)

module.exports = router;