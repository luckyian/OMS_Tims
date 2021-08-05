const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api/users");
const storeRoutes = require("./api/store")
const chipsRoutes = require("./api/chips")

router.use("/api/store", storeRoutes)
router.use("/api/user", userRoutes)
router.use("/api/chips", chipsRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
