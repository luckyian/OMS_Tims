const router = require("express").Router();
const storeController = require("../../controller/storeController");

// Matches with "/api/bloodsugar"
router.route("/")
  // .get(storeController.findAll)
  .post(storeController.create);

// Matches with "/api/bloodsugar/:id"
// router
//   .route("/:id")
  // .get(storeController.findById)
  // .put(storeController.update)
  // .delete(storeController.remove);

// router.route("/bloodsugarpage")
// .get(storeController.findAll)
// console.log(id)

module.exports = router;
