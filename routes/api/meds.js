const router = require("express").Router();
const medsController = require('../../controller/medsController')

router.route("/")
    .delete(medsController.removeChip)
    .post(medsController.addNewChip)
router.route("/dose")
    .post(medsController.takeMedication)

module.exports = router;